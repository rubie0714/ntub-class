<template>
    <div class="w-full h-[100vh] md:flex">
        <div class="flex text-center w-full  md:w-2/3 bg-gray-500 items-center">
            <h1 class="mx-auto text-xl md:text-3xl py-10">國立臺北商業大學 資訊查詢系統</h1>
        </div>
        <div class="flex text-center w-full md:w-1/3 items-center">
            <div class="flex flex-col space-y-8 w-full py-10">
                <router-link to="/classtable"
                    class=" rounded border px-4 py-2 text-white w-2/3 mx-auto hover:translate-y-1 hover:bg-gray-500 duration-500">
                    個人課表查詢</router-link>
                <!--
                <router-link to="/"
                    class="rounded border px-4 py-2 text-white w-2/3 mx-auto hover:translate-y-1 hover:bg-gray-500 duration-500"
                    onmouseover="this.innerText='待開發'" onmouseout="this.innerText='教室課表查詢'">
                    教室課表查詢</router-link>
                <router-link to="/"
                    class="rounded border px-4 py-2 text-white w-2/3 mx-auto hover:translate-y-1 hover:bg-gray-500 duration-500"
                    onmouseover="this.innerText='待開發'" onmouseout="this.innerText='教師課表查詢'">
                    教師課表查詢
                </router-link>-->
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>