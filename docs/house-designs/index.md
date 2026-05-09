---
title: 家装设计
---

<script setup>
const houseUpgradeSteps = [
  { label: '房屋 Lv1', status: 'done' },
  { label: '收集材料', status: 'done' },
  { label: '房屋 Lv2', status: 'done' },
  { label: '完成装修任务', status: 'current' },
  { label: '房屋 Lv3', status: 'pending' },
  { label: '高级装修', status: 'pending' },
]

const petAdoptionSteps = [
  { label: '房屋 Lv3', status: 'done' },
  { label: '动物之友任务', status: 'done' },
  { label: '建造宠物屋', status: 'current' },
  { label: '准备宠物粮', status: 'pending' },
  { label: '领养宠物', status: 'pending' },
]
</script>

# 家装设计

## 装修前置条件

<StepBar title="房屋装修流程" :steps="houseUpgradeSteps" />

<div class="prerequisite-highlight">
  <strong>⚠ 重要提示：</strong>升级房屋前请确保背包有足够空间，升级材料不退还。
</div>

---

## 装修方案展示

<ContentCardGrid>
  <ContentCard title="田园风格" image="田园风客厅" description="温馨田园风，适合新手小屋" :requirements="['房屋Lv2', '木材×50', '金币×5000']" />
  <ContentCard title="现代简约" image="简约客厅" description="简洁大方的现代装修" :requirements="['房屋Lv3', '石材×80', '金币×12000']" />
  <ContentCard title="童话城堡" image="城堡外观" description="梦幻城堡风格装修" :requirements="['房屋Lv4', '水晶×30', '金币×25000']" />
</ContentCardGrid>

---

## 宠物领养

<StepBar title="宠物领养流程" :steps="petAdoptionSteps" />

<div class="prerequisite-highlight">
  <strong>⚠ 领养条件：</strong>需要房屋等级达到 Lv3 以上，且完成「动物之友」任务。
</div>

<ContentCardGrid>
  <ContentCard title="小狗" image="小狗" description="忠诚的伙伴，可以帮忙寻找物品" :requirements="['房屋Lv3', '宠物屋×1', '狗粮×10']" />
  <ContentCard title="小猫" image="小猫" description="可爱的小伙伴，增加幸运值" :requirements="['房屋Lv3', '宠物屋×1', '猫粮×10']" />
  <ContentCard title="小兔子" image="小兔子" description="温顺的小家伙，提升作物品质" :requirements="['房屋Lv4', '豪华宠物屋×1', '胡萝卜×20']" />
</ContentCardGrid>
