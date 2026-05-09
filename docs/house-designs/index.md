---
title: House Design Ideas & Layouts
---

<script setup>
const houseUpgradeSteps = [
  { label: 'House Lv1', status: 'done' },
  { label: 'Gather Materials', status: 'done' },
  { label: 'House Lv2', status: 'done' },
  { label: 'Complete Decoration Quest', status: 'current' },
  { label: 'House Lv3', status: 'pending' },
  { label: 'Advanced Decoration', status: 'pending' },
]

const petAdoptionSteps = [
  { label: 'Reach D.G. Lv12', status: 'done' },
  { label: 'Complete Cat Onboarding', status: 'done' },
  { label: 'Build Pet House', status: 'current' },
  { label: 'Prepare Pet Food', status: 'pending' },
  { label: 'Adopt Pets', status: 'pending' },
]
</script>

# Heartopia House Design Ideas & Layouts

House design inspiration, room-by-room ideas, layout archetypes, and furniture guides.

## House Upgrade Path

<StepBar title="House Upgrade Path" :steps="houseUpgradeSteps" />

<div class="prerequisite-highlight">
  <strong>Important:</strong> Make sure your backpack has enough space before upgrading. Materials are not refundable.
</div>

---

## Popular Design Themes

<ContentCardGrid>
  <ContentCard title="Cozy Cottage" image="Cozy Cottage" description="Wooden furniture, warm rugs, candles, and soft pillows — perfect for beginners." :requirements="['House Lv2', 'Wood ×50', 'Gold ×5000']" />
  <ContentCard title="Modern Minimalist" image="Modern Minimalist" description="Simple furniture, neutral colors, open space, and sleek decor." :requirements="['House Lv3', 'Stone ×80', 'Gold ×12000']" />
  <ContentCard title="Nature Haven" image="Nature Haven" description="Indoor plants, Roaming Oak items, natural wood, and green accents." :requirements="['House Lv4', 'Plants ×20', 'Gold ×15000']" />
</ContentCardGrid>

---

## More Design Themes

<ContentCardGrid>
  <ContentCard title="Pastel Dream" image="Pastel Dream" description="Pink furniture, lavender accents, cute decor, and fairy lights." :requirements="['House Lv3', 'Dye ×15', 'Gold ×10000']" />
  <ContentCard title="Rustic Farmhouse" image="Rustic Farmhouse" description="Barn wood, vintage items, mason jars, and checkered patterns." :requirements="['House Lv3', 'Wood ×100', 'Gold ×8000']" />
  <ContentCard title="Coastal Beach" image="Coastal Beach" description="Blue & white palette, shell decor, light fabrics, and ocean vibes." :requirements="['House Lv4', 'Shells ×30', 'Gold ×18000']" />
</ContentCardGrid>

---

## Pets & Adoption

Adopt cats, dogs, and discover the Oak-Oak companion.

<StepBar title="Pet Adoption Path" :steps="petAdoptionSteps" />

<div class="prerequisite-highlight">
  <strong>Adoption requirements:</strong> Requires D.G. Level 12 and completion of the Cat Onboarding quest. Dogs unlock after cats.
</div>

<ContentCardGrid>
  <ContentCard title="Cats" image="Cat" description="Adopt and raise cats. Dress them up, play mini-games, and increase happiness." :requirements="['D.G. Lv12', 'Pet House', 'Cat Food ×10']" />
  <ContentCard title="Dogs" image="Dog" description="Adopt and train dogs. Take them on walks, teach tricks, and earn rewards." :requirements="['D.G. Lv12', 'Pet House', 'Dog Food ×10']" />
  <ContentCard title="Oak-Oak" image="Oak-Oak" description="Mysterious forest companion. Unlocks via the Astralis quest line." :requirements="['D.G. Lv15', 'Astralis Quest', 'Roaming Oak Timber']" />
</ContentCardGrid>
