# How to contribute

### Prerequisite
- NodeJS (開発用にv7.0.0利用）
- ぐるなびAPIキー

### Contributing

1. Join this repository and clone it.
2. ``npm install``
3. Create your feature branch from **development** branch (``git checkout develpment && git checkout -b your-branch``)
4. Create a **.env** file in your root directory, and add following key.
   ```
     GNAVI_API_KEY=<Your API Key>
   ```
   This file will be ignored to commit.
5. Commit your changes (``git commit -m 'Commit comment'``)
6. ``npm test``
7. Push to the branch (``git push origin your-branch``)
8. Create a new Pull Request to **development** branch.

### Run the server
You can run this on your local environment with ``npm start``, and access http://localhost:3000/.

