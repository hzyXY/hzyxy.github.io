const t=JSON.parse(`{"key":"v-24b49000","path":"/IntranetSec/WindowsSec/%E5%86%85%E7%BD%91%E4%B8%BB%E6%9C%BA%E5%9F%BA%E6%9C%AC%E4%BF%A1%E6%81%AF%E6%94%B6%E9%9B%86.html","title":"内网主机基本信息收集（命令）","lang":"zh-CN","frontmatter":{"title":"内网主机基本信息收集（命令）","date":"2022-11-16T00:00:00.000Z","category":["内网安全"],"tag":["Windows系统内网安全","域内信息收集"],"description":"内网主机基本信息收集（命令） 攻击流程 信息收集→漏洞利用→权限提升→权限维持→隧道技术→内网渗透 自动内网信息收集 #创建bat文件，复制进去执行 @echo off echo ############################## &gt;&gt;1.txt ipconfig &gt;&gt;1.txt echo ############################## &gt;&gt;1.txt systeminfo | findstr /B /C:\\"OS Name\\" /C:\\"OS Version\\" &gt;&gt;1.txt systeminfo| findstr /B /C:\\"OS 名称\\" /C:\\"OS 版本\\" &gt;&gt;1.txt echo ############################## &gt;&gt;1.txt echo %PROCESSOR_ARCHITECTURE% &gt;&gt;1.txt #高手的代码 for /f \\"delims=\\" %%A in ('dir /s /b %WINDIR%\\\\system32\\\\*htable.xsl') do set \\"var=%%A\\" wmic process get CSName,Description,ExecutablePath,ProcessId /format:\\"%var%\\" &gt;&gt; out.html wmic service get Caption,Name,PathName,ServiceType,Started,StartMode,StartName /format:\\"%var%\\" &gt;&gt; out.html wmic USERACCOUNT list full /format:\\"%var%\\" &gt;&gt; out.html wmic group list full /format:\\"%var%\\" &gt;&gt; out.html wmic nicconfig where IPEnabled='true' get Caption,DefaultIPGateway,Description,DHCPEnabled,DHCPServer,IPAddress,IPSubnet,MACAddress /format:\\"%var%\\" &gt;&gt; out.html wmic volume get Label,DeviceID,DriveLetter,FileSystem,Capacity,FreeSpace /format:\\"%var%\\" &gt;&gt; out.html wmic netuse list full /format:\\"%var%\\" &gt;&gt; out.html wmic qfe get Caption,Description,HotFixID,InstalledOn /format:\\"%var%\\" &gt;&gt; out.html wmic startup get Caption,Command,Location,User /format:\\"%var%\\" &gt;&gt; out.html wmic PRODUCT get Description,InstallDate,InstallLocation,PackageCache,Vendor,Version /format:\\"%var%\\" &gt;&gt; out.html wmic os get name,version,InstallDate,LastBootUpTime,LocalDateTime,Manufacturer,RegisteredUser,ServicePackMajorVersion,SystemDirectory /format:\\"%var%\\" &gt;&gt; out.html wmic Timezone get DaylightName,Description,StandardName /format:\\"%var%\\" &gt;&gt; out.html","head":[["meta",{"property":"og:url","content":"https://hzyxy.github.io/IntranetSec/WindowsSec/%E5%86%85%E7%BD%91%E4%B8%BB%E6%9C%BA%E5%9F%BA%E6%9C%AC%E4%BF%A1%E6%81%AF%E6%94%B6%E9%9B%86.html"}],["meta",{"property":"og:site_name","content":"XY"}],["meta",{"property":"og:title","content":"内网主机基本信息收集（命令）"}],["meta",{"property":"og:description","content":"内网主机基本信息收集（命令） 攻击流程 信息收集→漏洞利用→权限提升→权限维持→隧道技术→内网渗透 自动内网信息收集 #创建bat文件，复制进去执行 @echo off echo ############################## &gt;&gt;1.txt ipconfig &gt;&gt;1.txt echo ############################## &gt;&gt;1.txt systeminfo | findstr /B /C:\\"OS Name\\" /C:\\"OS Version\\" &gt;&gt;1.txt systeminfo| findstr /B /C:\\"OS 名称\\" /C:\\"OS 版本\\" &gt;&gt;1.txt echo ############################## &gt;&gt;1.txt echo %PROCESSOR_ARCHITECTURE% &gt;&gt;1.txt #高手的代码 for /f \\"delims=\\" %%A in ('dir /s /b %WINDIR%\\\\system32\\\\*htable.xsl') do set \\"var=%%A\\" wmic process get CSName,Description,ExecutablePath,ProcessId /format:\\"%var%\\" &gt;&gt; out.html wmic service get Caption,Name,PathName,ServiceType,Started,StartMode,StartName /format:\\"%var%\\" &gt;&gt; out.html wmic USERACCOUNT list full /format:\\"%var%\\" &gt;&gt; out.html wmic group list full /format:\\"%var%\\" &gt;&gt; out.html wmic nicconfig where IPEnabled='true' get Caption,DefaultIPGateway,Description,DHCPEnabled,DHCPServer,IPAddress,IPSubnet,MACAddress /format:\\"%var%\\" &gt;&gt; out.html wmic volume get Label,DeviceID,DriveLetter,FileSystem,Capacity,FreeSpace /format:\\"%var%\\" &gt;&gt; out.html wmic netuse list full /format:\\"%var%\\" &gt;&gt; out.html wmic qfe get Caption,Description,HotFixID,InstalledOn /format:\\"%var%\\" &gt;&gt; out.html wmic startup get Caption,Command,Location,User /format:\\"%var%\\" &gt;&gt; out.html wmic PRODUCT get Description,InstallDate,InstallLocation,PackageCache,Vendor,Version /format:\\"%var%\\" &gt;&gt; out.html wmic os get name,version,InstallDate,LastBootUpTime,LocalDateTime,Manufacturer,RegisteredUser,ServicePackMajorVersion,SystemDirectory /format:\\"%var%\\" &gt;&gt; out.html wmic Timezone get DaylightName,Description,StandardName /format:\\"%var%\\" &gt;&gt; out.html"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XY"}],["meta",{"property":"article:tag","content":"Windows系统内网安全"}],["meta",{"property":"article:tag","content":"域内信息收集"}],["meta",{"property":"article:published_time","content":"2022-11-16T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"内网主机基本信息收集（命令）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-16T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XY\\",\\"url\\":\\"https://hzyxy.github.io\\"}]}"]]},"headers":[{"level":2,"title":"内网主机基本信息收集（命令）","slug":"内网主机基本信息收集-命令","link":"#内网主机基本信息收集-命令","children":[{"level":3,"title":"攻击流程","slug":"攻击流程","link":"#攻击流程","children":[]},{"level":3,"title":"自动内网信息收集","slug":"自动内网信息收集","link":"#自动内网信息收集","children":[]},{"level":3,"title":"手动内网信息收集","slug":"手动内网信息收集","link":"#手动内网信息收集","children":[]}]}],"git":{},"readingTime":{"minutes":11.35,"words":3405},"filePathRelative":"IntranetSec/WindowsSec/内网主机基本信息收集.md","localizedDate":"2022年11月16日","excerpt":"<h2> 内网主机基本信息收集（命令）</h2>\\n<h3> 攻击流程</h3>\\n<p>信息收集→漏洞利用→权限提升→权限维持→隧道技术→内网渗透</p>\\n<h3> 自动内网信息收集</h3>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\">#创建bat文件，复制进去执行</span>\\n@echo off\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token comment\\">############################## &gt;&gt;1.txt</span>\\nipconfig <span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token number\\">1</span>.txt\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token comment\\">############################## &gt;&gt;1.txt</span>\\nsysteminfo <span class=\\"token operator\\">|</span> findstr /B /C:<span class=\\"token string\\">\\"OS Name\\"</span> /C:<span class=\\"token string\\">\\"OS Version\\"</span> <span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token number\\">1</span>.txt\\nsysteminfo<span class=\\"token operator\\">|</span> findstr /B /C:<span class=\\"token string\\">\\"OS 名称\\"</span> /C:<span class=\\"token string\\">\\"OS 版本\\"</span> <span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token number\\">1</span>.txt\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token comment\\">############################## &gt;&gt;1.txt</span>\\n<span class=\\"token builtin class-name\\">echo</span> %PROCESSOR_ARCHITECTURE% <span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token number\\">1</span>.txt\\n\\n\\n\\n\\n<span class=\\"token comment\\">#高手的代码</span>\\n<span class=\\"token keyword\\">for</span> /f <span class=\\"token string\\">\\"delims=\\"</span> %%A <span class=\\"token keyword\\">in</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'dir /s /b %WINDIR%\\\\system32\\\\*htable.xsl'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">do</span> <span class=\\"token builtin class-name\\">set</span> <span class=\\"token string\\">\\"var=%%A\\"</span>\\nwmic process get CSName,Description,ExecutablePath,ProcessId /format:<span class=\\"token string\\">\\"%var%\\"</span> <span class=\\"token operator\\">&gt;&gt;</span> out.html\\nwmic <span class=\\"token function\\">service</span> get Caption,Name,PathName,ServiceType,Started,StartMode,StartName /format:<span class=\\"token string\\">\\"%var%\\"</span> <span class=\\"token operator\\">&gt;&gt;</span> out.html\\nwmic USERACCOUNT list full /format:<span class=\\"token string\\">\\"%var%\\"</span> <span class=\\"token operator\\">&gt;&gt;</span> out.html\\nwmic group list full /format:<span class=\\"token string\\">\\"%var%\\"</span> <span class=\\"token operator\\">&gt;&gt;</span> out.html\\nwmic nicconfig where <span class=\\"token assign-left variable\\">IPEnabled</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">'true'</span> get Caption,DefaultIPGateway,Description,DHCPEnabled,DHCPServer,IPAddress,IPSubnet,MACAddress /format:<span class=\\"token string\\">\\"%var%\\"</span> <span class=\\"token operator\\">&gt;&gt;</span> out.html\\nwmic volume get Label,DeviceID,DriveLetter,FileSystem,Capacity,FreeSpace /format:<span class=\\"token string\\">\\"%var%\\"</span> <span class=\\"token operator\\">&gt;&gt;</span> out.html\\nwmic netuse list full /format:<span class=\\"token string\\">\\"%var%\\"</span> <span class=\\"token operator\\">&gt;&gt;</span> out.html\\nwmic qfe get Caption,Description,HotFixID,InstalledOn /format:<span class=\\"token string\\">\\"%var%\\"</span> <span class=\\"token operator\\">&gt;&gt;</span> out.html\\nwmic startup get Caption,Command,Location,User /format:<span class=\\"token string\\">\\"%var%\\"</span> <span class=\\"token operator\\">&gt;&gt;</span> out.html\\nwmic PRODUCT get Description,InstallDate,InstallLocation,PackageCache,Vendor,Version /format:<span class=\\"token string\\">\\"%var%\\"</span> <span class=\\"token operator\\">&gt;&gt;</span> out.html\\nwmic os get name,version,InstallDate,LastBootUpTime,LocalDateTime,Manufacturer,RegisteredUser,ServicePackMajorVersion,SystemDirectory /format:<span class=\\"token string\\">\\"%var%\\"</span> <span class=\\"token operator\\">&gt;&gt;</span> out.html\\nwmic Timezone get DaylightName,Description,StandardName /format:<span class=\\"token string\\">\\"%var%\\"</span> <span class=\\"token operator\\">&gt;&gt;</span> out.html\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
