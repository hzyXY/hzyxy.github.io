const e=JSON.parse(`{"key":"v-c6c37e5c","path":"/Range/HTB/06Sequel.html","title":"06Sequel","lang":"zh-CN","frontmatter":{"title":"06Sequel","date":"2023-04-16T00:00:00.000Z","category":["靶场"],"tag":["Hackthebox"],"description":"Sequel攻略 渗透过程 使用nmap（-sC用默认脚本、-sV扫描该服务器所运行服务的版本）扫描靶机。发现开放了3306端口。 登录进目标靶机的mysql服务器 搜集信息，得到flag。 问题 During our scan, which port do we find serving MySQL? 3306 What community-developed MySQL version is the target running? MariaDB When using the MySQL command line client, what switch do we need to use in order to specify a login username? -u Which username allows us to log into this MariaDB instance without providing a password? root In SQL, what symbol can we use to specify within the query that we want to display everything inside a table? * In SQL, what symbol do we need to end each query with? ; There are three databases in this MySQL instance that are common across all MySQL instances. What is the name of the fourth that's unique to this host? htb Submit root flag 7b4bec00d1a39e3dd4e021ec3d915da8","head":[["meta",{"property":"og:url","content":"https://hzyxy.github.io/Range/HTB/06Sequel.html"}],["meta",{"property":"og:site_name","content":"XY"}],["meta",{"property":"og:title","content":"06Sequel"}],["meta",{"property":"og:description","content":"Sequel攻略 渗透过程 使用nmap（-sC用默认脚本、-sV扫描该服务器所运行服务的版本）扫描靶机。发现开放了3306端口。 登录进目标靶机的mysql服务器 搜集信息，得到flag。 问题 During our scan, which port do we find serving MySQL? 3306 What community-developed MySQL version is the target running? MariaDB When using the MySQL command line client, what switch do we need to use in order to specify a login username? -u Which username allows us to log into this MariaDB instance without providing a password? root In SQL, what symbol can we use to specify within the query that we want to display everything inside a table? * In SQL, what symbol do we need to end each query with? ; There are three databases in this MySQL instance that are common across all MySQL instances. What is the name of the fourth that's unique to this host? htb Submit root flag 7b4bec00d1a39e3dd4e021ec3d915da8"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XY"}],["meta",{"property":"article:tag","content":"Hackthebox"}],["meta",{"property":"article:published_time","content":"2023-04-16T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"06Sequel\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-16T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XY\\",\\"url\\":\\"https://hzyxy.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Sequel攻略","slug":"sequel攻略","link":"#sequel攻略","children":[{"level":3,"title":"渗透过程","slug":"渗透过程","link":"#渗透过程","children":[]},{"level":3,"title":"问题","slug":"问题","link":"#问题","children":[]}]}],"git":{},"readingTime":{"minutes":0.74,"words":222},"filePathRelative":"Range/HTB/06Sequel.md","localizedDate":"2023年4月16日","excerpt":"<h2> Sequel攻略</h2>\\n<h3> 渗透过程</h3>\\n<ol>\\n<li>使用nmap（-sC用默认脚本、-sV扫描该服务器所运行服务的版本）扫描靶机。发现开放了3306端口。</li>\\n</ol>\\n\\n<ol start=\\"2\\">\\n<li>登录进目标靶机的mysql服务器</li>\\n</ol>\\n\\n<ol start=\\"3\\">\\n<li>搜集信息，得到flag。</li>\\n</ol>\\n\\n<h3> 问题</h3>\\n<ol>\\n<li>During our scan, which port do we find serving MySQL?\\n3306</li>\\n<li>What community-developed MySQL version is the target running?\\nMariaDB</li>\\n<li>When using the MySQL command line client, what switch do we need to use in order to specify a login username?\\n-u</li>\\n<li>Which username allows us to log into this MariaDB instance without providing a password?\\nroot</li>\\n<li>In SQL, what symbol can we use to specify within the query that we want to display everything inside a table?\\n*</li>\\n<li>In SQL, what symbol do we need to end each query with?\\n;</li>\\n<li>There are three databases in this MySQL instance that are common across all MySQL instances. What is the name of the fourth that's unique to this host?\\nhtb</li>\\n<li>Submit root flag\\n7b4bec00d1a39e3dd4e021ec3d915da8</li>\\n</ol>","autoDesc":true}`);export{e as data};
