const e=JSON.parse('{"key":"v-11f83949","path":"/IntranetSec/WindowsSec/WMIC%E8%BF%9C%E7%A8%8B%E5%91%BD%E4%BB%A4%E6%89%A7%E8%A1%8C%E6%A8%AA%E5%90%91%E7%A7%BB%E5%8A%A8.html","title":"WMIC远程命令执行横向移动","lang":"zh-CN","frontmatter":{"title":"WMIC远程命令执行横向移动","date":"2022-12-05T18:37:17.000Z","category":["内网安全"],"tag":["Windows系统内网安全","横向移动"],"description":"WMIC远程命令执行横向移动 什么是WMI WMI（Windows Management Instrumentation）是Windows再Powershell还未发布前，微软用来管理Windows系统的重要数据库工具，WMI本身的组织架构是一个数据库架构，WMI服务使用DCOM或WinRM协议，自动PsExec再内网被严格监控后，越来越多的反病毒厂商将PsExec加入了黑名单，于是黑客们渐渐开始使用WMI来进行横向移动。通过渗透测试发现，在使用wmiexec进行横向移动时，windwos操作系统默认不会将WMI的操作记录在日志中。因此很多APT开始使用WMI进行攻击。","head":[["meta",{"property":"og:url","content":"https://hzyxy.github.io/IntranetSec/WindowsSec/WMIC%E8%BF%9C%E7%A8%8B%E5%91%BD%E4%BB%A4%E6%89%A7%E8%A1%8C%E6%A8%AA%E5%90%91%E7%A7%BB%E5%8A%A8.html"}],["meta",{"property":"og:site_name","content":"XY"}],["meta",{"property":"og:title","content":"WMIC远程命令执行横向移动"}],["meta",{"property":"og:description","content":"WMIC远程命令执行横向移动 什么是WMI WMI（Windows Management Instrumentation）是Windows再Powershell还未发布前，微软用来管理Windows系统的重要数据库工具，WMI本身的组织架构是一个数据库架构，WMI服务使用DCOM或WinRM协议，自动PsExec再内网被严格监控后，越来越多的反病毒厂商将PsExec加入了黑名单，于是黑客们渐渐开始使用WMI来进行横向移动。通过渗透测试发现，在使用wmiexec进行横向移动时，windwos操作系统默认不会将WMI的操作记录在日志中。因此很多APT开始使用WMI进行攻击。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XY"}],["meta",{"property":"article:tag","content":"Windows系统内网安全"}],["meta",{"property":"article:tag","content":"横向移动"}],["meta",{"property":"article:published_time","content":"2022-12-05T18:37:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WMIC远程命令执行横向移动\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-05T18:37:17.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XY\\",\\"url\\":\\"https://hzyxy.github.io\\"}]}"]]},"headers":[{"level":2,"title":"WMIC远程命令执行横向移动","slug":"wmic远程命令执行横向移动","link":"#wmic远程命令执行横向移动","children":[{"level":3,"title":"什么是WMI","slug":"什么是wmi","link":"#什么是wmi","children":[]},{"level":3,"title":"什么是WMIC","slug":"什么是wmic","link":"#什么是wmic","children":[]},{"level":3,"title":"WMIC常见命令","slug":"wmic常见命令","link":"#wmic常见命令","children":[]},{"level":3,"title":"常见错误","slug":"常见错误","link":"#常见错误","children":[]},{"level":3,"title":"wmic调用cmd","slug":"wmic调用cmd","link":"#wmic调用cmd","children":[]},{"level":3,"title":"wmic工具","slug":"wmic工具","link":"#wmic工具","children":[]}]}],"git":{},"readingTime":{"minutes":6.33,"words":1899},"filePathRelative":"IntranetSec/WindowsSec/WMIC远程命令执行横向移动.md","localizedDate":"2022年12月6日","excerpt":"<h2> WMIC远程命令执行横向移动</h2>\\n<h3> 什么是WMI</h3>\\n<ul>\\n<li>WMI（Windows Management Instrumentation）是Windows再Powershell还未发布前，微软用来管理Windows系统的重要数据库工具，WMI本身的组织架构是一个数据库架构，WMI服务使用DCOM或WinRM协议，自动PsExec再内网被严格监控后，越来越多的反病毒厂商将PsExec加入了黑名单，于是黑客们渐渐开始使用WMI来进行横向移动。通过渗透测试发现，在使用wmiexec进行横向移动时，windwos操作系统默认不会将WMI的操作记录在日志中。因此很多APT开始使用WMI进行攻击。</li>\\n</ul>","autoDesc":true}');export{e as data};
