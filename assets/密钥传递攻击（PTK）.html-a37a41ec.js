const t=JSON.parse('{"key":"v-72e01a99","path":"/IntranetSec/WindowsSec/%E5%AF%86%E9%92%A5%E4%BC%A0%E9%80%92%E6%94%BB%E5%87%BB%EF%BC%88PTK%EF%BC%89.html","title":"密钥传递攻击（PTK）","lang":"zh-CN","frontmatter":{"title":"密钥传递攻击（PTK）","date":"2022-12-02T00:00:00.000Z","category":["内网安全"],"tag":["Windows系统内网安全","横向移动"],"description":"密钥传递攻击（PTK） 密钥传递攻击（pass the key） 对于win8.1/2012r2，安装了kb2871997的win7/2008r2/2012，可以使用AES keys代替NTLM来进行验证。 只能攻击域管理员账户，只有域管有aes的密钥。 什么是KB2871997 KB2871997：进制本地管理员账户用于远程连接，这样就无法以本地管理员用户的权限执行wmi、psexec、schtasks、at和访问文件共享。 这个补丁发布后，常规的Pass The Hash已无法成功，维度默认的Administrator（SID 500）的账号例外，利用这个账号仍然可以进行PTH远程连接，即使administrator修改了名字。 但我们可以通过AES密钥来替代NTLM验证进行横向的操作。","head":[["meta",{"property":"og:url","content":"https://hzyxy.github.io/IntranetSec/WindowsSec/%E5%AF%86%E9%92%A5%E4%BC%A0%E9%80%92%E6%94%BB%E5%87%BB%EF%BC%88PTK%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"XY"}],["meta",{"property":"og:title","content":"密钥传递攻击（PTK）"}],["meta",{"property":"og:description","content":"密钥传递攻击（PTK） 密钥传递攻击（pass the key） 对于win8.1/2012r2，安装了kb2871997的win7/2008r2/2012，可以使用AES keys代替NTLM来进行验证。 只能攻击域管理员账户，只有域管有aes的密钥。 什么是KB2871997 KB2871997：进制本地管理员账户用于远程连接，这样就无法以本地管理员用户的权限执行wmi、psexec、schtasks、at和访问文件共享。 这个补丁发布后，常规的Pass The Hash已无法成功，维度默认的Administrator（SID 500）的账号例外，利用这个账号仍然可以进行PTH远程连接，即使administrator修改了名字。 但我们可以通过AES密钥来替代NTLM验证进行横向的操作。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XY"}],["meta",{"property":"article:tag","content":"Windows系统内网安全"}],["meta",{"property":"article:tag","content":"横向移动"}],["meta",{"property":"article:published_time","content":"2022-12-02T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"密钥传递攻击（PTK）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-02T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XY\\",\\"url\\":\\"https://hzyxy.github.io\\"}]}"]]},"headers":[{"level":2,"title":"密钥传递攻击（PTK）","slug":"密钥传递攻击-ptk","link":"#密钥传递攻击-ptk","children":[{"level":3,"title":"什么是KB2871997","slug":"什么是kb2871997","link":"#什么是kb2871997","children":[]},{"level":3,"title":"攻击步骤","slug":"攻击步骤","link":"#攻击步骤","children":[]}]}],"git":{},"readingTime":{"minutes":1.49,"words":446},"filePathRelative":"IntranetSec/WindowsSec/密钥传递攻击（PTK）.md","localizedDate":"2022年12月2日","excerpt":"<h2> 密钥传递攻击（PTK）</h2>\\n<ul>\\n<li>\\n<p>密钥传递攻击（pass the key）</p>\\n</li>\\n<li>\\n<p>对于win8.1/2012r2，安装了kb2871997的win7/2008r2/2012，可以使用AES keys代替NTLM来进行验证。</p>\\n</li>\\n<li>\\n<p>只能攻击域管理员账户，只有域管有aes的密钥。</p>\\n</li>\\n</ul>\\n<h3> 什么是KB2871997</h3>\\n<ul>\\n<li>KB2871997：进制本地管理员账户用于远程连接，这样就无法以本地管理员用户的权限执行wmi、psexec、schtasks、at和访问文件共享。</li>\\n<li>这个补丁发布后，常规的Pass The Hash已无法成功，维度默认的Administrator（SID 500）的账号例外，利用这个账号仍然可以进行PTH远程连接，即使administrator修改了名字。</li>\\n<li>但我们可以通过AES密钥来替代NTLM验证进行横向的操作。</li>\\n</ul>","autoDesc":true}');export{t as data};
