const t=JSON.parse('{"key":"v-944d207c","path":"/IntranetSec/WindowsSec/Kerberos%E9%BB%84%E9%87%91%E7%A5%A8%E6%8D%AE.html","title":"Kerberos黄金票据","lang":"zh-CN","frontmatter":{"title":"Kerberos黄金票据","date":"2022-11-22T00:00:00.000Z","category":["内网安全"],"tag":["Windows系统内网安全","权限维持"],"description":"Kerberos黄金票据 Krbtgt账户介绍 krbtgt用户，是系统在创建域时自动生成的一个帐号，其作用是密钥分发中心的服务账号，其密码是系统随机生成 的，无法进行登录。 黄金票据原理 前提：已经控制了域控并且使用管理员登陆或者是提权后的system TGT=Krbtgt的NTLM Hash加密 Kerberos中的TGT和Logon Session Key（CT_SK）是AS返回的，TGT它是由Krbtgt加密和签名的，Krbtgt的NTLM Hash又是固定的，而CT_SK并不会保存在KDC中。 所以只要得到Krbtgt的NTLM Hash，就可以伪造TGT和Logon Session Key（CT_SK）。 Client和TGS的交互中，有了金票（TGT）后，就可以跳过AS验证，不用验证用户名和密码，所以不用担心域管理员密码修改。","head":[["meta",{"property":"og:url","content":"https://hzyxy.github.io/IntranetSec/WindowsSec/Kerberos%E9%BB%84%E9%87%91%E7%A5%A8%E6%8D%AE.html"}],["meta",{"property":"og:site_name","content":"XY"}],["meta",{"property":"og:title","content":"Kerberos黄金票据"}],["meta",{"property":"og:description","content":"Kerberos黄金票据 Krbtgt账户介绍 krbtgt用户，是系统在创建域时自动生成的一个帐号，其作用是密钥分发中心的服务账号，其密码是系统随机生成 的，无法进行登录。 黄金票据原理 前提：已经控制了域控并且使用管理员登陆或者是提权后的system TGT=Krbtgt的NTLM Hash加密 Kerberos中的TGT和Logon Session Key（CT_SK）是AS返回的，TGT它是由Krbtgt加密和签名的，Krbtgt的NTLM Hash又是固定的，而CT_SK并不会保存在KDC中。 所以只要得到Krbtgt的NTLM Hash，就可以伪造TGT和Logon Session Key（CT_SK）。 Client和TGS的交互中，有了金票（TGT）后，就可以跳过AS验证，不用验证用户名和密码，所以不用担心域管理员密码修改。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XY"}],["meta",{"property":"article:tag","content":"Windows系统内网安全"}],["meta",{"property":"article:tag","content":"权限维持"}],["meta",{"property":"article:published_time","content":"2022-11-22T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kerberos黄金票据\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-22T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XY\\",\\"url\\":\\"https://hzyxy.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Kerberos黄金票据","slug":"kerberos黄金票据","link":"#kerberos黄金票据","children":[{"level":3,"title":"Krbtgt账户介绍","slug":"krbtgt账户介绍","link":"#krbtgt账户介绍","children":[]},{"level":3,"title":"实操","slug":"实操","link":"#实操","children":[]}]}],"git":{},"readingTime":{"minutes":2.49,"words":748},"filePathRelative":"IntranetSec/WindowsSec/Kerberos黄金票据.md","localizedDate":"2022年11月22日","excerpt":"<h2> Kerberos黄金票据</h2>\\n<h3> Krbtgt账户介绍</h3>\\n<ul>\\n<li>krbtgt用户，是系统在创建域时自动生成的一个帐号，其作用是密钥分发中心的服务账号，其密码是系统随机生成 的，无法进行登录。</li>\\n</ul>\\n<h4> 黄金票据原理</h4>\\n<p>前提：已经控制了域控并且使用管理员登陆或者是提权后的system</p>\\n<ul>\\n<li>TGT=Krbtgt的NTLM Hash加密</li>\\n</ul>\\n<ol>\\n<li>Kerberos中的TGT和Logon Session Key（CT_SK）是AS返回的，TGT它是由Krbtgt加密和签名的，Krbtgt的NTLM Hash又是固定的，而CT_SK并不会保存在KDC中。</li>\\n<li>所以只要得到Krbtgt的NTLM Hash，就可以伪造TGT和Logon Session Key（CT_SK）。</li>\\n<li>Client和TGS的交互中，有了金票（TGT）后，就可以跳过AS验证，不用验证用户名和密码，所以不用担心域管理员密码修改。</li>\\n</ol>","autoDesc":true}');export{t as data};
