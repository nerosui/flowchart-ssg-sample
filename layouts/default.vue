<template>
    <div class="wrap">
    <TheHeader />
    <div class="flex-auto">
    <slot />
    </div>
    <TheFooter />
    </div>
</template>

<style scoped scss>
.wrap {
    display: flex !important;
    height: 100% !important;
    flex-direction: column !important;
}
.flex-auto{
    flex: auto;
}
</style>