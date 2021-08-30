1. Create virtual environment
    `py -m venv venv`

2. Using virtual environment
    `.\venv\Scripts\activate`

3. Install dependencies
    `pip install -r requirements.txt`

3. Run server:
    `cd server`
    `py api.py`

4. Run client:
    - Install "Live Server" extension
    - Open a project and click to Go Live from the status bar to turn the server on/off.

5. Build, test, benchmarks Assemblycript:
    cd client
    cd assemblyscript-benchmarks
    npm run asbuild
    npm run test
    npm run bench