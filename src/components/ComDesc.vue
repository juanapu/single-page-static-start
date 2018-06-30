<template>
	 <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner text-center rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-upper">
                  <slot name="smaltitle"></slot>
                </span>
                <span class="section-heading-lower">
                  <slot name="maintitle"></slot>
                </span>
              </h2>
              <p class="mb-0">
                <slot name="desc"></slot>
              </p>
            </div>
          </div>
        </div>
      </div>
</template>