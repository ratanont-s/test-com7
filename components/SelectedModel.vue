<template>
        <div>
            <input type="radio" name="models" :id="`model-${model.name}`" class="hidden" />
            <label :for="`model-${model.name}`" class="cursor-pointer flex justify-between items-center gap-5 py-7 px-5 border rounded-lg">
                <h6>
                    <b>{{ model.name }}</b>
                </h6>
                <span>ราคาเริ่มต้น ฿0</span>
            </label>
        </div>
</template>

<script setup>
    const { model } = defineProps(['model'])
</script>

<style lang="scss" scoped></style>