# 卡片组件

### 示例

<m-card :imgSrc="$withBase('/bg7.png')" summary="11">
<template v-slot:footer>
				<div class="footer">
					<div class="footer-spring">
						<div class="level">4步骤</div>
						<div class="level">10965收藏</div>
					</div>
				</div>
</template>
</m-card>

### 代码

```html
<m-card :imgSrc="$withBase('/bg7.png')" summary="11">
	<template v-slot:footer>
		<div class="footer">
			<div class="footer-spring">
				<div class="level">4步骤</div>
				<div class="level">10965收藏</div>
			</div>
		</div>
	</template>
</m-card>
```

### Attributes

| 参数      | 说明         | 类型        | 是否必要 | 默认值 |
| --------- | ------------ | ----------- | -------- | ------ |
| width     | 卡片高度     | Number      | false    | -      |
| imgSrc    | 图片资源地址 | String      | true     | -      |
| imgHeight | 图片高度     | Number      | false    | -      |
| summary   | 卡片概要     | String/Slot | false    | -      |
| footer    | 卡片底部     | Slot        | false    | -      |
