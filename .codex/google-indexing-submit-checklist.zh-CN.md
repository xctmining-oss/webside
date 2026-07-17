# Google 收录提交清单

本清单用于本地 SEO 修复发布后，手动在 Google Search Console 完成站点验证、sitemap 提交和重点 URL 请求编入索引。

## 当前目标

- 站点主域名：`https://www.xctmining.com/`
- 首选公开 URL 格式：无 `.html` 后缀，例如 `https://www.xctmining.com/en-cone-crusher-liners`
- sitemap：`https://www.xctmining.com/sitemap.xml`
- robots：`https://www.xctmining.com/robots.txt`
- 本地待发布 sitemap URL 数：84（包含 3 个 VSI 多语言页和 3 个隐私政策页）

## 发布前域名与 Cloudflare 配置

1. 修复裸域名
   - 在 Cloudflare DNS 中为 `@` 配置可代理的站点记录，目标应与 `www` 的实际托管平台一致。
   - 配置 `https://xctmining.com/*` 到 `https://www.xctmining.com/$1` 的永久重定向。
   - 发布后分别验证 HTTP/HTTPS 裸域均返回 301，最终落到 `https://www.xctmining.com/`，不要出现 200 双版本。

2. 检查 AI 爬虫策略
   - 普通搜索抓取必须继续保持 `search=yes` 和 `Allow: /`。
   - 如果目标包含 ChatGPT 等 AI 搜索曝光，在 Cloudflare Managed robots / AI Crawl Control 中确认 `OAI-SearchBot` 等搜索型爬虫未被阻止。
   - 是否允许 GPTBot、Google-Extended 等训练或扩展用途爬虫应由网站所有者单独决定，不要把训练爬虫与普通搜索爬虫混为一谈。

## Search Console 操作

1. 添加资源
   - 优先添加 Domain property：`xctmining.com`
   - 如果暂时不能改 DNS，则添加 URL prefix：`https://www.xctmining.com/`

2. 验证所有权
   - Domain property 使用 Google 提供的 DNS TXT 记录。
   - URL prefix 可使用 Google 提供的 HTML 文件或 HTML meta tag。
   - 不要使用占位验证码。拿到真实 token 后再写入页面或上传验证文件。

3. 提交 sitemap
   - 在 Search Console 的 Sitemaps 页面提交：`https://www.xctmining.com/sitemap.xml`
   - 提交后检查是否显示 `Success`，以及发现 URL 数量是否与 sitemap 中 URL 数量接近。

4. 请求重点 URL 编入索引
   - `https://www.xctmining.com/`
   - `https://www.xctmining.com/en-cone-crusher-liners`
   - `https://www.xctmining.com/en-bronze-bushings`
   - `https://www.xctmining.com/metso-hp-series-crusher-parts`
   - `https://www.xctmining.com/hp300-cone-crusher-parts`
   - `https://www.xctmining.com/crusher-parts-by-reference-number`
   - `https://www.xctmining.com/quality-inspection`

5. 发布后复查
   - `site:xctmining.com`
   - `site:www.xctmining.com`
   - `"xctmining.com"`
   - Search Console Coverage / Pages 报告
   - Search Console URL Inspection 中的 canonical、crawl allowed、indexing allowed 状态
   - Bing Webmaster Tools 中提交同一 sitemap，并检查抓取错误和索引页数
   - 如重点覆盖俄语市场，在 Yandex Webmaster 中提交 sitemap 并检查 Indexing / Excluded pages

## 注意事项

- 中文页面当前有意保持 `noindex,nofollow`，不要作为重点收录 URL 提交。
- 若 Google 提示 `Duplicate, Google chose different canonical than user`，先检查线上最终 URL、canonical、sitemap、hreflang 是否仍一致。
- 若 Google 提示 `Discovered - currently not indexed` 或 `Crawled - currently not indexed`，通常需要等待，并继续增加高质量外链、第三方公司页反链和站内内容质量。
