<template>
  <main class="min-h-screen transition-colors  bg-gradient-to-r from-fuchsia-500 to-cyan-500 dark:from-fuchsia-900 dark:to-cyan-800">
    <DarkMode class="absolute top-4 right-4" />

    <div class="min-h-screen flex items-center justify-center p-4">
      <div
        class="w-full max-w-4xl shadow-3xl rounded-3xl p-6 transition-colors duration-300 bg-gradient-to-r from-slate-300 to-slate-500 dark:bg-gradient-to-l dark:from-slate-600 dark:to-slate-900 dark:text-white">
        <NuxtPage />
      </div>
    </div>
  </main>
</template>

<style>
html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

body {
  @apply min-h-screen antialiased;
}
</style>
