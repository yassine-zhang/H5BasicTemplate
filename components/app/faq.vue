<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">
        Frequently asked questions
      </h2>
      <p class="mt-6 max-w-2xl text-base leading-7 text-gray-600">
        Have a different question and can’t find the answer you’re looking for?
        Reach out to our support team by
        <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500"
          >sending us an email</a
        >
        and we’ll get back to you as soon as we can.
      </p>
      <div class="mt-20">
        <dl
          class="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10"
        >
          <div v-for="faq in faqs" :key="faq.id">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              {{ faq.question }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              {{ faq.answer }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: "Why do you never see elephants hiding in trees?",
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];
</script>
