# Path Navigation Notes

* **Current Location:** `f:/Course/Project/src/index.js` (We are here right now)
* **Target File:** `f:/Course/Project/Public/index.html` (The file we want to show)

### Hardcoded Solution (Unoptimized)
```javascript
res.sendFile(path.resolve("f:/Course/Project/Public/index.html"))
```

---

## 1. Find the Current File Path

First, we need to find our current absolute path using the `fileURLToPath` function. 

### How to access it:
```javascript
import { fileURLToPath } from 'url'
```

We need to target: `f:/Course/Project/src/index.js`. 
Sometimes, forward slashes (`/`) are not considered proper path partitions on Windows, so we need to replace them with backslashes (`\`). This issue is automatically handled and fixed by `fileURLToPath`.

```javascript
const __filename = fileURLToPath(import.meta.url)  
// Result: __filename = f:/Course/Project/src/index.js
```

---

## 2. Find the Current Directory Path

Now we want the current directory path, which is: `f:/Course/Project/src`.

To obtain that path, we need to use a function called `dirname`, which can be accessed from the `path` module:

```javascript
import path, { dirname } from 'path'
```

```javascript
const __dirname = dirname(__filename) 
// Result: __dirname = f:/Course/Project/src
```

---

## 3. Terminal Navigation Analogy

What would we do if we were using the terminal?
```bash
cd ..       # Moves up to: f:/Course/Project
cd Public   # Moves into: f:/Course/Project/Public
```
Then we append the file name at the end to get the full file path:
`f:/Course/Project/Public/index.html`

---

## 4. The Dynamic Code Solution

How can we replicate that terminal navigation in our code? Simply use the `path` module utility:

```javascript
path.join(__dirname, "../Public", "index.html")
```
