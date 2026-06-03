# AGENTS.md

## 项目概览

这是一个纯静态企业外贸网站，面向海外采购商展示 XCT Mining（Ma'anshan Xct Mining Engineering Machinery Technology Co., Ltd.）的破碎机耐磨件与备件能力。站点重点服务 Google、Yandex、Bing 和 AI 搜索理解，核心目标是让采购商能按机型、零件名、材质、参考号和应用场景发起 RFQ。

项目没有发现 `package.json`、构建工具或后端服务；页面可直接以静态 HTML 打开。当前目录也不是 git 仓库。

## 业务定位

- 公司名称：Ma'anshan Xct Mining Engineering Machinery Technology Co., Ltd.
- 品牌名称：XCT Mining
- 成立时间：2013-01-06
- 地址：No. 423 Yinxing Avenue, Cihu High-Tech Zone, Ma'anshan, Anhui, China
- 业务类型：破碎机售后耐磨件、备件制造商与贸易公司
- 公开信任信息：ISO 9001 / ISO 14001 / ISO 45001，工厂面积约 11,574 平方米，MOQ 1 pc
- 主要联系信息：
  - Email：`leon@xctmining.com`
  - WhatsApp：`+86 13013110975`

## 产品范围

重点产品包括：

- 圆锥破碎机衬板：mantle、bowl liner、concave，材质覆盖 Mn13、Mn18、Mn22 等高锰钢
- 铜套与铜件：eccentric bushing、socket liner、frame bushing、countershaft bushing、main shaft sleeve
- 锁紧螺母与机械备件：lock nut、mantle nut、torch ring、feed cone、retaining hardware
- 圆锥破碎机偏心配重与铸钢件
- 液压安全联轴器与破碎机保护组件
- 颚板、护板、VSI rotor tip、Barmac-style rotor parts、筛条
- 可按图纸、样品、旧件照片做定制和反向测绘

## 商标与合规口径

这是独立售后替换件网站。Metso、Nordberg、Sandvik、Barmac 等品牌名只能用于说明适配机型或替换应用，不能写成原厂、授权代理、官方经销商或品牌关联方，除非用户明确提供正式授权文件。

所有新增页面都应保留类似口径：

- independent aftermarket supplier
- replacement parts
- compatible with / used to identify machine compatibility only
- trademarks belong to their respective owners

## 页面结构

### 主入口

- `index.html`：英文首页，当前主 SEO 页面；包含结构化数据、产品网格、机型筛选、质量流程、采购证明、工程指南、FAQ 和询盘表单。
- `zh.html`：中文首页，当前带 `noindex,nofollow`。
- `ru.html`：俄语首页，已设置 canonical 与 hreflang。
- `es.html`：西语首页，已设置 canonical 与 hreflang。

### 英文产品详情页

- `en-cone-crusher-liners.html`
- `en-bronze-bushings.html`
- `en-lock-nuts.html`
- `en-counterweights.html`
- `en-hydraulic-safety-couplings.html`
- `en-jaw-vsi-parts.html`

### 中文产品详情页

这些页面均为 `zh-CN`，目前带 `noindex,nofollow`：

- `zh-cone-crusher-liners.html`
- `zh-bronze-bushings.html`
- `zh-lock-nuts.html`
- `zh-counterweights.html`
- `zh-hydraulic-safety-couplings.html`
- `zh-jaw-vsi-parts.html`

### 工程指南页

- `guide-manganese-liner-materials.html`
- `guide-hp300-liner-rfq.html`
- `guide-eccentric-bushing-wear.html`

### 搜索与 AI 文件

- `robots.txt`：允许抓取，并指向线上 sitemap。
- `sitemap.xml`：列出英文首页、俄语/西语页、英文产品页和指南页。
- `llms.txt`：面向 AI 搜索的公司与产品摘要。
- `ai.txt`：更短的 AI/爬虫说明。
- `seo-action-plan.zh-CN.md`：SEO 行动计划，但当前文件内容显示为乱码，修改前应先确认编码或从原始资料恢复。

## 资源目录

- `assets/crusher-parts-hero.png`：首页及多语言首页共用的首屏图。
- `public/公司资料/`：公司 logo、航拍图、认证证书等公司资料。
- `public/高锰合金耐磨件/`：高锰钢耐磨件图片和视频，含衬板、板锤、锤头、对辊机、陶瓷钉细节图等。
- `public/缸套/`：钢套、偏心套、主轴衬套、偏心铜套等图片。
- `public/球面瓦/`：铜件、球面瓦架等图片。
- `public/配重/`：偏心配重、锁紧螺母、配重等图片。
- `public/液压安全联轴器/`：液压安全联轴器原图和 WPS 批量处理后的压缩图。

优先使用真实产品和工厂图片，不要新增虚假证书、虚假案例、虚假客户 logo。

## 前端实现约定

- 全站主要样式在 `styles.css`。
- 交互脚本在 `script.js`。
- 站点使用原生 HTML/CSS/JS，没有框架依赖。
- 页面布局偏工业 B2B，颜色变量定义在 `:root`：
  - `--ink`
  - `--muted`
  - `--line`
  - `--paper`
  - `--white`
  - `--steel`
  - `--orange`
  - `--yellow`
  - `--green`
- 主要组件类名：
  - `.site-header`
  - `.hero`
  - `.trust-strip`
  - `.section`
  - `.product-grid`
  - `.product-card`
  - `.part-finder`
  - `.finder-result`
  - `.detail-media`
  - `.detail-gallery`
  - `.quote-section`
  - `.sticky-rfq`
  - `.footer`
- 响应式断点主要是 `920px` 和 `600px`。

## JavaScript 行为

`script.js` 负责：

- 根据询盘表单内容动态生成 `mailto:` 链接。
- 根据询盘表单内容动态生成 WhatsApp RFQ 链接。
- 支持复制 RFQ 文本到剪贴板。
- 首页产品查找器按搜索词过滤 `.finder-result`。
- 快捷搜索按钮通过 `data-search` 填充搜索框并触发过滤。

新增或改动询盘字段时，需要同步检查 `buildRfqText()` 和 `updateRfqLinks()`。

## SEO 与结构化数据

- `index.html` 已包含 `Organization`、`WebSite`、`FAQPage` JSON-LD。
- 英文首页 canonical 是 `https://www.xctmining.com/`。
- 英文首页 hreflang 包含 `en`、`ru`、`es`、`x-default`。
- `ru.html` 和 `es.html` 有 canonical 与 hreflang。
- `zh.html` 和中文产品详情页目前是 `noindex,nofollow`，不要误删，除非明确要让中文页被索引。
- 首页有占位的 Yandex 验证码：`replace-with-yandex-webmaster-code`，上线时应替换为真实验证码。
- `sitemap.xml` 更新页面时要同步维护，尤其是新增英文 SEO 页面或改变 URL 后。

## 多语言同步规则

- 英文首页或英文可索引页面新增结构、产品图库、型号/系列入口、质量入口、RFQ 入口、导航或底部链接时，需要同步检查并更新 `zh.html`、`ru.html`、`es.html`。
- `zh.html` 和中文详情页默认保持 `noindex,nofollow`，除非用户明确要求中文站参与索引。
- 新增正式可索引英文页面时，同步更新 `sitemap.xml`、首页内链、`llms.txt`/`ai.txt` 中必要摘要，并检查俄语、西语首页是否需要增加入口。
- 涉及商标或适配机型的多语言文案，必须继续使用 independent aftermarket / replacement parts / compatible with 的合规口径。

## 内容写作原则

- 用采购员语言写清楚：是什么零件、适配哪些机型、常见材质、生产/检测点、询价需要什么信息。
- 不要堆砌关键词。
- 英文页面优先承接海外搜索词，例如 `crusher wear parts`、`crusher spare parts`、`cone crusher liners`、`bronze bushings`、`lock nuts`、`counterweights`、`hydraulic safety couplings`、`HP300`、`CH440` 等。
- 产品页应包含明确 RFQ 信息要求：机型、零件名或参考号、图纸/照片、材质、数量、目的国/目的港、交期。
- 图片文件名和 alt 文本尽量使用可理解的产品词；现有中文路径可以继续使用，但新增面向 SEO 的图片建议采用英文描述性文件名。

## 本地查看与验证

因为是静态站，通常可以直接打开 HTML 文件验证：

- 首页：`D:\agant\codex\company_web\index.html`
- 中文页：`D:\agant\codex\company_web\zh.html`
- 俄语页：`D:\agant\codex\company_web\ru.html`
- 西语页：`D:\agant\codex\company_web\es.html`

修改页面后建议至少检查：

- 桌面和手机宽度下首屏、导航、询盘表单、底部固定 RFQ 条是否正常。
- 图片路径是否能加载，尤其是 `public/` 下含中文目录的路径。
- `mailto:`、WhatsApp 链接和复制 RFQ 是否仍可用。
- canonical、hreflang、robots、sitemap 是否和页面索引策略一致。

## 重要注意事项

- 当前 `AGENTS.md` 是根据现有文件夹内容整理，未访问外部资料核验公司信息。
- `seo-action-plan.zh-CN.md` 显示乱码，说明可能存在编码问题；不要基于乱码内容直接复制到页面。
- `public/` 内有大量大体积图片和视频，新增引用时优先选压缩后的 `WPS图片批量处理` 版本，避免页面过重。
- 不要随意删除真实素材目录；很多页面直接引用这些中文路径。
- 若新增正式可索引页面，记得同步补充 `sitemap.xml`、必要的 internal links、meta description 和商标兼容性声明。
