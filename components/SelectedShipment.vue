<template>
    <ul class="grid gap-5">
        <li>
            <input type="radio" name="shipments" id="shipment-1" class="hidden" checked />
            <label for="shipment-1" class="cursor-pointer flex items-center py-4 px-7 border rounded-lg gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-10 h-10">
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
            <label for="shipment-2" class="cursor-pointer flex items-center py-4 px-7 border rounded-lg gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-10 h-10">
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
</template>

<script setup>

</script>

<style lang="scss" scoped></style>