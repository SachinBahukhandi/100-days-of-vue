<template>
  <div class="flex space-x-2 w-3/3">
    <div class="w-2/3 flex justify-center items-center m-2">
      <h1 class="logo-name">Sachin Bahukhandi</h1>
    </div>
    <div class="w-1/3 flex justify-center items-center m-2">
      <img
        class="object-cover w-20 h-20"
        src="https://www.gravatar.com/avatar/87a605a71f2053e784c80018bc619656?s=256&d=identicon&r=PG&f=1"
      />
    </div>
  </div>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full">
        <Tab :items="['a','b','c']"/>
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
        >
          <div class="px-4 py-5 flex-auto">
            <div class="tab-content tab-space">
              <div
                v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
              >
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits.
                  <br />
                  <br />
                  Dramatically visualize customer directed convergence without
                  revolutionary ROI.
                </p>
              </div>
              <div
                v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
              >
                <p>
                  Completely synergize resource taxing relationships via premier
                  niche markets. Professionally cultivate one-to-one customer
                  service with robust ideas.
                  <br />
                  <br />
                  Dynamically innovate resource-leveling customer service for
                  state of the art customer service.
                </p>
              </div>
              <div
                v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
              >
                <p>
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize timely deliverables for
                  real-time schemas.
                  <br />
                  <br />
                  Dramatically maintain clicks-and-mortar solutions without
                  functional solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
import Tab from './Tab.vue';

const openTab: Ref<number> = ref(1);
const name: Ref<string> = ref("red-tabs");
function toggleTabs(tabNumber: number) {
  openTab.value = tabNumber;
}
</script>
