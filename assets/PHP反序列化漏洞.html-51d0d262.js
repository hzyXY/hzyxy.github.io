const e=JSON.parse('{"key":"v-4593bfcc","path":"/WebSec/WebVul/PHP%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96%E6%BC%8F%E6%B4%9E.html","title":"PHP反序列化漏洞","lang":"zh-CN","frontmatter":{"title":"PHP反序列化漏洞","date":"2022-11-07T00:00:00.000Z","category":["Web安全"],"tag":["Web常规漏洞"],"description":"PHP反序列化漏洞 什么是序列化和反序列化？ 对象的状态信息转换为可以存储或传输的形式的过程。在序列化期间，对象将当前的状态写入到临时或持久性的存储区 ，将状态信息保存为字符串 将字符串转换为状态信息 序列化的的两个函数： 序列化 serialize() 反序列化 unserialize() PHP序列化和反序列化","head":[["meta",{"property":"og:url","content":"https://hzyxy.github.io/WebSec/WebVul/PHP%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96%E6%BC%8F%E6%B4%9E.html"}],["meta",{"property":"og:site_name","content":"XY"}],["meta",{"property":"og:title","content":"PHP反序列化漏洞"}],["meta",{"property":"og:description","content":"PHP反序列化漏洞 什么是序列化和反序列化？ 对象的状态信息转换为可以存储或传输的形式的过程。在序列化期间，对象将当前的状态写入到临时或持久性的存储区 ，将状态信息保存为字符串 将字符串转换为状态信息 序列化的的两个函数： 序列化 serialize() 反序列化 unserialize() PHP序列化和反序列化"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XY"}],["meta",{"property":"article:tag","content":"Web常规漏洞"}],["meta",{"property":"article:published_time","content":"2022-11-07T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PHP反序列化漏洞\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-07T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XY\\",\\"url\\":\\"https://hzyxy.github.io\\"}]}"]]},"headers":[{"level":2,"title":"PHP反序列化漏洞","slug":"php反序列化漏洞","link":"#php反序列化漏洞","children":[{"level":3,"title":"什么是序列化和反序列化？","slug":"什么是序列化和反序列化","link":"#什么是序列化和反序列化","children":[]},{"level":3,"title":"PHP序列化和反序列化","slug":"php序列化和反序列化","link":"#php序列化和反序列化","children":[]},{"level":3,"title":"魔术方法","slug":"魔术方法","link":"#魔术方法","children":[]},{"level":3,"title":"反序列化漏洞的利用","slug":"反序列化漏洞的利用","link":"#反序列化漏洞的利用","children":[]}]}],"git":{},"readingTime":{"minutes":5.85,"words":1754},"filePathRelative":"WebSec/WebVul/PHP反序列化漏洞.md","localizedDate":"2022年11月7日","excerpt":"<h2> PHP反序列化漏洞</h2>\\n<h3> 什么是序列化和反序列化？</h3>\\n<ul>\\n<li>\\n<p>对象的状态信息转换为可以存储或传输的形式的过程。在序列化期间，对象将当前的状态写入到临时或持久性的存储区 ，将状态信息保存为<strong>字符串</strong></p>\\n</li>\\n<li>\\n<p>将字符串转换为<strong>状态信息</strong></p>\\n</li>\\n<li>\\n<p>序列化的的两个函数：</p>\\n<ul>\\n<li>序列化 serialize()</li>\\n<li>反序列化 unserialize()</li>\\n</ul>\\n</li>\\n</ul>\\n<h3> PHP序列化和反序列化</h3>","autoDesc":true}');export{e as data};
