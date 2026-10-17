import assert from 'node:assert/strict';
import {curate,selection} from './import-smileback-reviews.mjs';
const row=s=>({source:s.source,id:s.id,date:'2026-10-17T16:00:00Z',comment:'Exact fixture quote.',has_marketing_permission:true,status:s.source==='csat'?'open':'current',email:'never-exposed@example.invalid'});
const input={complete:true,source:'both',observed_at:'2026-10-17T16:00:00Z',reviews:selection.map(row)};
assert.equal(curate(input).reviews.length,5);
assert.equal(curate(input).reviews[0].contact,'Judge Amy McCartney');
assert.equal(curate(input).reviews[0].company,'42nd Judicial District');
assert(!JSON.stringify(curate(input)).includes('never-exposed'));
for(const value of [false,null,1,'true']){
 const next=structuredClone(input);next.reviews[0].has_marketing_permission=value;
 assert.equal(curate(next).reviews.length,4);
}
for(const status of ['deleted','unknown',undefined]){
 const next=structuredClone(input);next.reviews[0].status=status;
 assert.equal(curate(next).reviews.length,4);
}
const absent=structuredClone(input);absent.reviews.pop();assert.equal(curate(absent).reviews.length,4);
const extra=structuredClone(input);extra.reviews.push({...row(selection[0]),id:999});assert.equal(curate(extra).reviews.length,5);
const empty=structuredClone(input);empty.reviews[0].comment='  ';assert.equal(curate(empty).reviews.length,4);
assert.throws(()=>curate({...input,complete:false}));
assert.throws(()=>curate({...input,source:'csat'}));
assert.throws(()=>curate({...input,reviews:[...input.reviews,input.reviews[0]]}));
console.log('Review-cache checks passed: five-ID allowlist, strict consent/status, minimal fields, revocation/deletion/absence replacement and partial-export refusal.');
