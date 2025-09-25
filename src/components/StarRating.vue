<template>
  <star-rating
    :star-size="24"
    :read-only="readonly"
    :show-rating="false"
    :rating="rating"
    @rating-selected="$emit('update:rating', $event)"
    :increment="0.5"
    :round-start-rating="false"
    :fixed-points="1"
    :active-color="'#28a745'"
    :inactive-color="'#ddd'"
  />
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "StarRating",
  components: { StarRating },
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
