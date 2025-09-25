<template>
  <div
    class="position-relative rounded overflow-hidden"
    :style="{
      backgroundImage: `url('${backgroundImage}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '400px',
    }"
  >
    <div
      class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex flex-column justify-content-center p-4"
      :style="{ backdropFilter: 'blur(4px)' }"
    >
      <h1 class="text-white fw-bold mb-3">{{ title }}</h1>
      <p class="text-white mb-0">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroBanner",
  props: {
    backgroundImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
