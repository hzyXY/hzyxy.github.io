const e=JSON.parse('{"key":"v-5c15ecd2","path":"/IntranetSec/WindowsSec/smbexec%E6%A8%AA%E5%90%91%E7%A7%BB%E5%8A%A8.html","title":"smbexec横向移动","lang":"zh-CN","frontmatter":{"title":"smbexec横向移动","date":"2023-03-16T00:00:00.000Z","category":["内网安全"],"tag":["Windows系统内网安全","横向移动"],"description":"smbexec横向移动 SMB介绍 SMB全称时Server Massage Block翻译过来时服务器信息块，它是一种客户端到服务器的通信协议。除此之外，SMB协议也被称为请求-恢复协议。客户端与服务器建立连接后，客户端可以向服务器发送SMB命令允许用户共享、打开、读取或者时写入文件。 利用条件：开启了445端口，且知道用户域名和密码或LM:NTLM哈希 smbexec的使用 smbexec为impacket工具中的工具，操作简单，容易被杀。","head":[["meta",{"property":"og:url","content":"https://hzyxy.github.io/IntranetSec/WindowsSec/smbexec%E6%A8%AA%E5%90%91%E7%A7%BB%E5%8A%A8.html"}],["meta",{"property":"og:site_name","content":"XY"}],["meta",{"property":"og:title","content":"smbexec横向移动"}],["meta",{"property":"og:description","content":"smbexec横向移动 SMB介绍 SMB全称时Server Massage Block翻译过来时服务器信息块，它是一种客户端到服务器的通信协议。除此之外，SMB协议也被称为请求-恢复协议。客户端与服务器建立连接后，客户端可以向服务器发送SMB命令允许用户共享、打开、读取或者时写入文件。 利用条件：开启了445端口，且知道用户域名和密码或LM:NTLM哈希 smbexec的使用 smbexec为impacket工具中的工具，操作简单，容易被杀。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XY"}],["meta",{"property":"article:tag","content":"Windows系统内网安全"}],["meta",{"property":"article:tag","content":"横向移动"}],["meta",{"property":"article:published_time","content":"2023-03-16T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"smbexec横向移动\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-16T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XY\\",\\"url\\":\\"https://hzyxy.github.io\\"}]}"]]},"headers":[{"level":2,"title":"smbexec横向移动","slug":"smbexec横向移动","link":"#smbexec横向移动","children":[{"level":3,"title":"SMB介绍","slug":"smb介绍","link":"#smb介绍","children":[]},{"level":3,"title":"smbexec的使用","slug":"smbexec的使用","link":"#smbexec的使用","children":[]}]}],"git":{},"readingTime":{"minutes":0.96,"words":288},"filePathRelative":"IntranetSec/WindowsSec/smbexec横向移动.md","localizedDate":"2023年3月16日","excerpt":"<h2> smbexec横向移动</h2>\\n<h3> SMB介绍</h3>\\n<ul>\\n<li>SMB全称时Server Massage Block翻译过来时服务器信息块，它是一种客户端到服务器的通信协议。除此之外，SMB协议也被称为请求-恢复协议。客户端与服务器建立连接后，客户端可以向服务器发送SMB命令允许用户共享、打开、读取或者时写入文件。</li>\\n<li>利用条件：开启了445端口，且知道用户域名和密码或LM:NTLM哈希</li>\\n</ul>\\n<h3> smbexec的使用</h3>\\n<ul>\\n<li>smbexec为impacket工具中的工具，操作简单，容易被杀。</li>\\n</ul>","autoDesc":true}');export{e as data};
