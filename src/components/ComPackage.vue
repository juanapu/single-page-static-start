<template>
	<div class="compackage">
      <div class="intro-text left-0 text-center bg-faded p-5 rounded">
        <h2 class="section-heading mb-4">
          <span class="section-heading-upper">
            <slot name="smaltitle"></slot>
          </span>
          <span class="section-heading-lower">
            <slot name="maintitle"></slot>
          </span>
        </h2>
        <p class="mb-3">
            <slot name="desc"></slot>
        </p>
        <div class="mb-3">
          <slot name="table"></slot>
        </div>
        <div class="intro-button mx-auto">
          <slot name="link"></slot>
        </div>
      </div>
	</div>
</template>