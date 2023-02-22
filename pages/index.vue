<template>
    <main>
        <div class="container mx-auto">
            <div class="flex flex-col md:flex-row">
                <div>
                    <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-pink-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1629842710000" alt="">
                </div>
                <div>
                    <h2 class="font-bold text-4xl mb-5">ซื้อ iPhone 12</h2>
                    <div>
                        <h3 class="font-bold text-2xl mb-5">รุ่น</h3>
                        <ul>
                            <li>
                                <input type="radio" name="models" id="model-1" checked>
                                <label for="model-1" class="flex justify-between py-7 px-5 border rounded-lg">
                                    <h6>iPhone 12<small>4.7 inch display</small></h6>
                                    <span>ราคาเริ่มต้น ฿23,800</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" name="models" id="model-2">
                                <label for="model-2" class="flex justify-between py-7 px-5 border rounded-lg">
                                    <span>iPhone 12 Pro Max<small>6.1 inch display</small></span>
                                    <span>ราคาเริ่มต้น ฿32,800</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold text-2xl mb-5">สี</h3>
                        <ul>
                            <li>
                                <input type="radio" name="colors" id="color-1" checked>
                                <label for="color-1">
                                    <span>Color icon</span>
                                    <span>Color name</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" name="colors" id="color-2">
                                <label for="color-2">
                                    <span>Color icon</span>
                                    <span>Color name</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" name="colors" id="color-3">
                                <label for="color-3">
                                    <span>Color icon</span>
                                    <span>Color name</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" name="colors" id="color-4">
                                <label for="color-4">
                                    <span>Color icon</span>
                                    <span>Color name</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold text-2xl mb-5">ขนาด</h3>
                        <ul>
                            <li>
                                <input type="radio" name="sizes" id="size-1" checked>
                                <label for="size-1">
                                    <span>64<small>GB</small></span>
                                    <span>฿28,800.00</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" name="sizes" id="size-2">
                                <label for="size-2">
                                    <span>128<small>GB</small></span>
                                    <span>฿32,800.00</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" name="sizes" id="size-3">
                                <label for="size-3">
                                    <span>512<small>GB</small></span>
                                    <span>฿36,800.00</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" name="sizes" id="size-4">
                                <label for="size-4">
                                    <span>1<small>TB</small></span>
                                    <span>฿39,800.00</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold text-2xl mb-5">คุณต้องการรับสินค้าด้วยวิธีใด</h3>
                        <ul>
                            <li>
                                <input type="radio" name="shipments" id="shipment-1" checked>
                                <label for="shipment-1">
                                    <img src="" alt="">
                                    <div>
                                        <span>บริการรับสินค้าหน้าร้าน</span>
                                        <span>จองเริ่มต้นเพียง ฿3,000.00 เท่านั้น</span>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" name="shipments" id="shipment-2">
                                <label for="shipment-2">
                                    <img src="" alt="">
                                    <div>
                                        <span>บริการจัดส่งถึงบ้าน</span>
                                        <span>ชำระสินค้าในราคาเต็ม</span>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <hr>
                    <button>ยืนยันการสั่งซื้อล่วงหน้า</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>