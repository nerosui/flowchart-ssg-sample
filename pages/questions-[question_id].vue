<template>
    <div>

        <div class="d-flex flex-column flex-items-center ">
            <h2 class="text-center">
                Question {{ question_id }}
            </h2>
            <h3>
                {{ question?.title }}
            </h3>
                {{ question?.content }}
        </div>
        <div class="d-flex flex-justify-center">
            <div v-for="choice in question?.choices" :key="choice?.next" class="text-center p-5">
               <NuxtLink :to="`questions-${choice?.next}`" class="d-block border rounded-2 p-5 mb-2">
                    {{ choice?.content  }}
                </NuxtLink>
            </div>
        </div>
        <div v-if="question?.choices == null" class="d-flex flex-justify-center p-5">
            <NuxtLink :to="'/'" class="d-block border rounded-2 p-5 mb-2">
                Restart
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import questions from '@/questions.json'
const route = useRoute()
const question_id = route.params.question_id
const question = Object.values(questions).find((question:any) => question.id === question_id)
</script>
