with open(r'C:\Users\suman\.gemini\antigravity-ide\brain\312e86ec-3898-4955-94c0-0fc66ef33178\.system_generated\steps\8\content.md', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

import re
matches = re.findall(r'(?:https?://[^"\'\s<>]+|images/[^"\'\s<>]+|assets/[^"\'\s<>]+)', text)
for m in sorted(set(matches)):
    if any(k in m.lower() for k in ['jpg', 'jpeg', 'png', 'webp']):
        print(m)
