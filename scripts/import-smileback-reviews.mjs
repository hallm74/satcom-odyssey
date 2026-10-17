import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

// Only these user-selected comments may enter the website. IDs are source-specific.
export const selection = [
  {source:'csat', id:46611097, contact:'Judge Amy McCartney', company:'42nd Judicial District'},
  {source:'nps', id:527248, contact:'Natalie Hurd', company:'Hurd Electric'},
  {source:'nps', id:527283, contact:'Lisa Butler', company:'Sabine Parish Humane Society'},
  {source:'nps', id:527320, contact:'Ginger Rice', company:'Toledo Car Wash'},
  {source:'nps', id:552929, contact:'Lori Wheat', company:'Wheat Physical Therapy & Wellness'},
];

export function curate(input) {
  if (!input || input.complete !== true || input.source !== 'both' || !Array.isArray(input.reviews)
      || typeof input.observed_at !== 'string' || !Number.isFinite(Date.parse(input.observed_at))) {
    throw new Error('Use a complete combined CSAT/NPS export; partial updates are refused.');
  }
  const seen = new Set();
  for (const row of input.reviews) {
    const key = `${row.source}:${row.id}`;
    if(seen.has(key)) throw new Error('Duplicate source ID; cache unchanged.');
    seen.add(key);
  }
  const reviews = selection.flatMap(selected => {
    const row=input.reviews.find(r=>r.source===selected.source && r.id===selected.id);
    if(!row || row.has_marketing_permission !== true || typeof row.comment !== 'string' || !row.comment.trim()) return [];
    if(row.source==='csat' && !['open','done'].includes(row.status)) return [];
    if(row.source==='nps' && row.status!=='current') return [];
    if(typeof row.date !== 'string' || !Number.isFinite(Date.parse(row.date))) throw new Error('Invalid source date; cache unchanged.');
    return [{source:row.source,id:row.id,date:row.date,comment:row.comment,
      contact:selected.contact,company:selected.company,hasMarketingPermission:true}];
  });
  // Replacement is essential: missing, revoked, deleted or emptied rows disappear.
  return {observedAt:input.observed_at,mode:'verified-api-export-snapshot',reviews};
}

if(process.argv[1] && import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href) {
  const source=process.argv[2];
  if(!source) throw new Error('Usage: node scripts/import-smileback-reviews.mjs /private/path/complete-export.json');
  const result=curate(JSON.parse(await fs.readFile(source,'utf8')));
  const destination=new URL('../src/data/customer-reviews.json',import.meta.url);
  const temporary=new URL('../src/data/customer-reviews.json.pending',import.meta.url);
  await fs.mkdir(path.dirname(destination.pathname),{recursive:true});
  await fs.writeFile(temporary,JSON.stringify(result,null,2)+'\n');
  await fs.rename(temporary,destination);
  console.log(`Prepared ${result.reviews.length} allowlisted comments from a complete API export. No authentication performed.`);
}
