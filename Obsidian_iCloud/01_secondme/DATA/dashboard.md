# 02_data Dashboard

## High Impact AI Analyses
```dataview
table file.mtime as Updated, domain, summary_level
from "02_data/1.analize"
where impact = "high"
sort Updated desc
limit 30
```

## Decisions & Ideas from Reflexion
```dataview
table file.mtime as Updated, source_ai, domain
from "02_data/2.reflexion"
where contains(tags, "#decision")
sort Updated desc
``` 