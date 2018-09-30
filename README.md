# personal-website
It is a personal website developed in Vue.

## Update contents
### Update project
1. Create a new project json file with details.
2. Update list in `projects.js` under store.

## Deploy
1. Update file and directory permissions in server (for replacing files)
```
sudo find <folder> -type d -exec chmod 777 {} \;
sudo find <folder> -type d -exec chmod 777 {} \;
```

2. Copy all generated files from local to server ingoring `node_modules`.
```
scp -i ~/.ssh/<secret key> -r * <user>@<host>:<dest>
```

3. Restart ngnix
```
sudo service nginx stop
sudo service nginx start
```

4. Change back file and directory permissions in server
```
sudo find <folder> -type d -exec chmod 755 {} \;
sudo find <folder> -type d -exec chmod 755 {} \;
```
