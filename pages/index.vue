<template>
    <main>
        <div class="container px-4 mx-auto">
            <div class="flex flex-col md:flex-row gap-8">
                <div class="flex-1">
                    <div class="sticky top-0">
                        <img class="w-full max-w-2xl mx-auto"
                            src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-pink-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1629842710000"
                            alt="" />
                    </div>
                </div>
                <div class="flex-1 md:pt-32 mb-32 max-w-xl">
                    <h2 class="font-bold text-4xl mb-10">ซื้อ iPhone 12</h2>
                    <div class="mb-10">
                        <h3 class="font-bold text-2xl mb-5">รุ่น</h3>
                        <ul class="grid gap-5 whitespace-nowrap">
                            <li v-for="(model, index) in products" :key="index">
                                <SelectedModel :model="model" />
                            </li>
                        </ul>
                    </div>
                    <div class="mb-10">
                        <h3 class="font-bold text-2xl mb-5">สี</h3>
                        <SelectedColor/>
                    </div>
                    <div class="mb-10">
                        <h3 class="font-bold text-2xl mb-5">ขนาด</h3>
                        <SelectedSize/>
                    </div>
                    <div class="mb-10">
                        <h3 class="font-bold text-2xl mb-5">
                            คุณต้องการรับสินค้าด้วยวิธีใด
                        </h3>
                        <SelectedShipment/>
                    </div>
                    <hr />
                    <button class="bg-[#53b440] text-white font-bold py-3 px-7 rounded-lg w-full border-0">
                        ยืนยันการสั่งซื้อล่วงหน้า
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
// https://interview.com7.in/api/pre-order
const { data: products } = await useFetch(
    "https://interview.com7.in/api/pre-order", {
        transform: (_products) => _products.data.main_product,
    }
);
</script>

<style lang="scss" scoped>
input {
    &:checked~label {
        border-color: #53b440;
    }
}
</style>