<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <div id="app">
    <article class="content">
      <h1 class="content-title">Urna Cursus</h1>
      <main class="content-body">
        <p>
          Habitasse platea dictumst quisque sagittis purus sit. Ac feugiat sed
          lectus vestibulum mattis ullamcorper. Ultricies mi quis hendrerit
          dolor magna eget est lorem ipsum.
        </p>
        <p>
          Adipiscing tristique risus nec feugiat in fermentum. Faucibus turpis
          in eu mi bibendum. Integer quis auctor elit sed vulputate mi. Urna
          nunc id cursus metus aliquam eleifend mi in.
          <span v-pq:left.italic.quoted.highlighted
            >Cras tincidunt lobortis feugiat vivamus at augue eget. Eget felis
            eget nunc lobortis mattis aliquam faucibus. Netus et malesuada fames
            ac turpis.</span
          >
        </p>
        <p>
          Dui faucibus in ornare quam viverra. Orci phasellus egestas tellus
          rutrum tellus pellentesque eu. Lacus sed turpis tincidunt id. Mollis
          nunc sed id semper. Dictum at tempor commodo ullamcorper. Faucibus
          scelerisque eleifend mi in. Enim nec dui nunc mattis enim ut tellus
          elementum sagittis. Purus viverra accumsan in nisl nisi scelerisque eu
          ultrices.
        </p>
        <p>
          Dictumst quisque sagittis purus sit. Amet venenatis urna cursus eget.
          Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.
          <span
            v-pq:right="
              'Add abbreviated pull quotes by adding strings as expressions to the v-pq directive.'
            "
            >A custom, abbreviated message can also be shown instead of a
            selected text fragment, just by adding the message string as an
            expression to the directive. For example, an abbreviated pull-quote
            will be shown instead of this unnecessarily long pull-quote
            source.</span
          >
        </p>
        <p>
          Sit amet cursus sit amet dictum sit. Non blandit massa enim nec dui
          nunc mattis enim. Ornare arcu odio ut sem nulla pharetra diam sit.
          Faucibus ornare suspendisse sed nisi lacus sed viverra.
        </p>
        <p>
          Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Arcu
          odio ut sem nulla pharetra diam. Lacus suspendisse faucibus interdum
          posuere lorem ipsum dolor sit amet. Vestibulum lectus mauris ultrices
          eros. Est ullamcorper eget nulla facilisi. Sed euismod nisi porta
          lorem mollis.
        </p>
        <p>
          At consectetur lorem donec massa sapien faucibus et molestie ac.
          <span v-pq:center
            >Elit scelerisque mauris pellentesque pulvinar pellentesque habitant
            morbi tristique. Urna condimentum mattis pellentesque id nibh tortor
            id aliquet lectus.</span
          >
          Ac tortor dignissim convallis aenean et tortor. Pellentesque elit eget
          gravida cum sociis natoque penatibus et magnis. Sit amet facilisis
          magna etiam tempor orci eu lobortis.
        </p>
        <p>
          Tortor at auctor urna nunc id cursus metus. Pulvinar elementum integer
          enim neque volutpat. Vestibulum morbi blandit cursus risus at ultrices
          mi. Neque laoreet suspendisse interdum consectetur.
        </p>
        <p>
          Non blandit massa enim nec dui nunc mattis enim ut. In vitae turpis
          massa sed elementum tempus egestas sed. Mauris vitae ultricies leo
          integer malesuada nunc vel risus. Pellentesque eu tincidunt tortor
          aliquam nulla facilisi. Commodo sed egestas egestas fringilla
          phasellus faucibus scelerisque eleifend donec. Mattis vulputate enim
          nulla aliquet porttitor lacus luctus accumsan. Morbi tristique
          senectus et netus.
        </p>
        <p>
          Auctor neque vitae tempus quam pellentesque nec nam. Nisl rhoncus
          mattis rhoncus urna neque viverra justo. Nisi scelerisque eu ultrices
          vitae auctor eu augue. Sodales neque sodales ut etiam sit amet nisl.
          Mus mauris vitae ultricies leo. Tincidunt ornare massa eget egestas
          purus viverra accumsan in nisl. Venenatis lectus magna fringilla urna
          porttitor rhoncus dolor purus. Gravida dictum fusce ut placerat orci
          nulla pellentesque dignissim enim.
        </p>
        <p>
          Sit amet purus gravida quis blandit turpis. Ultrices eros in cursus
          turpis. Lorem ipsum dolor sit amet consectetur adipiscing elit
          pellentesque. Diam vel quam elementum pulvinar etiam non quam lacus
          suspendisse. Viverra accumsan in nisl nisi. Gravida arcu ac tortor
          dignissim convallis aenean. Elementum nibh tellus molestie nunc non
          blandit. Ut ornare lectus sit amet. Feugiat vivamus at augue eget arcu
          dictum varius duis. Felis eget nunc lobortis mattis. Adipiscing enim
          eu turpis egestas pretium aenean pharetra.
        </p>
      </main>
      <!-- .content-body -->
    </article>
    <!-- .content -->
  </div>
  <!-- #app -->
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
