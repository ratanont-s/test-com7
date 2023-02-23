<template>
    <main>
        <div class="container px-4 mx-auto">
            <div class="flex gap-8">
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
                            <li v-for="(p, index) in products" :key="index">
                                <input type="radio" name="models" :id="`model-${index}`" class="hidden" />
                                <label :for="`model-${index}`"
                                    class="cursor-pointer flex justify-between items-center gap-5 py-7 px-5 border rounded-lg">
                                    <h6>
                                        <b>{{ p.name }}</b><small class="block text-slate-400">4.7 inch display</small>
                                    </h6>
                                    <span>ราคาเริ่มต้น ฿</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div class="mb-10">
                        <h3 class="font-bold text-2xl mb-5">สี</h3>
                        <ul class="grid grid-cols-2 gap-5">
                            <li>
                                <input type="radio" name="colors" id="color-1" class="hidden" checked />
                                <label for="color-1"
                                    class="cursor-pointer flex flex-col items-center py-4 px-7 border rounded-lg">
                                    <span class="inline-block w-10 h-10 rounded-full mb-4 bg-[#50d71e]"></span>
                                    <span>Color name</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" name="colors" id="color-2" class="hidden" />
                                <label for="color-2"
                                    class="cursor-pointer flex flex-col items-center py-4 px-7 border rounded-lg">
                                    <span class="inline-block w-10 h-10 rounded-full mb-4 bg-[#50d71e]"></span>
                                    <span>Color name</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" name="colors" id="color-3" class="hidden" />
                                <label for="color-3"
                                    class="cursor-pointer flex flex-col items-center py-4 px-7 border rounded-lg">
                                    <span class="inline-block w-10 h-10 rounded-full mb-4 bg-[#50d71e]"></span>
                                    <span>Color name</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" name="colors" id="color-4" class="hidden" />
                                <label for="color-4"
                                    class="cursor-pointer flex flex-col items-center py-4 px-7 border rounded-lg">
                                    <span class="inline-block w-10 h-10 rounded-full mb-4 bg-[#50d71e]"></span>
                                    <span>Color name</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div class="mb-10">
                        <h3 class="font-bold text-2xl mb-5">ขนาด</h3>
                        <ul class="grid grid-cols-2 gap-5">
                            <li>
                                <input type="radio" name="sizes" id="size-1" class="hidden" checked />
                                <label for="size-1"
                                    class="cursor-pointer flex flex-col items-center py-4 px-7 border rounded-lg">
                                    <h6 class="font-bold text-3xl">
                                        64<small>GB</small>
                                    </h6>
                                    <small class="block text-slate-400">฿28,800.00</small>
                                </label>
                            </li>
                            <li>
                                <input type="radio" name="sizes" id="size-2" class="hidden" />
                                <label for="size-2"
                                    class="cursor-pointer flex flex-col items-center py-4 px-7 border rounded-lg">
                                    <h6 class="font-bold text-3xl">
                                        128<small>GB</small>
                                    </h6>
                                    <small class="block text-slate-400">฿32,800.00</small>
                                </label>
                            </li>
                            <li>
                                <input type="radio" name="sizes" id="size-3" class="hidden" />
                                <label for="size-3"
                                    class="cursor-pointer flex flex-col items-center py-4 px-7 border rounded-lg">
                                    <h6 class="font-bold text-3xl">
                                        512<small>GB</small>
                                    </h6>
                                    <small class="block text-slate-400">฿36,800.00</small>
                                </label>
                            </li>
                            <li>
                                <input type="radio" name="sizes" id="size-4" class="hidden" />
                                <label for="size-4"
                                    class="cursor-pointer flex flex-col items-center py-4 px-7 border rounded-lg">
                                    <h6 class="font-bold text-3xl">
                                        1<small>TB</small>
                                    </h6>
                                    <small class="block text-slate-400">฿39,800.00</small>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div class="mb-10">
                        <h3 class="font-bold text-2xl mb-5">
                            คุณต้องการรับสินค้าด้วยวิธีใด
                        </h3>
                        <ul class="grid gap-5">
                            <li>
                                <input type="radio" name="shipments" id="shipment-1" class="hidden" checked />
                                <label for="shipment-1"
                                    class="cursor-pointer flex items-center py-4 px-7 border rounded-lg gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>
                                    <div>
                                        <h6 class="font-bold">
                                            บริการรับสินค้าหน้าร้าน
                                        </h6>
                                        <small class="block text-slate-400">จองเริ่มต้นเพียง ฿3,000.00
                                            เท่านั้น</small>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" name="shipments" id="shipment-2" class="hidden" />
                                <label for="shipment-2"
                                    class="cursor-pointer flex items-center py-4 px-7 border rounded-lg gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                    </svg>
                                    <div>
                                        <h6 class="font-bold">
                                            บริการจัดส่งถึงบ้าน
                                        </h6>
                                        <small class="block text-slate-400">ชำระสินค้าในราคาเต็ม</small>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <button @click="showModal = true" class="bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-7 rounded-lg w-full border-0">
                        ยืนยันการสั่งซื้อล่วงหน้า
                    </button>
                </div>
            </div>
        </div>
        <ConfirmModal v-show="showModal"/>
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
        border-color: #84cc16;
    }
}
</style>