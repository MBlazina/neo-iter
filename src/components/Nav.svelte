<script>


 
</script>

<style lang="scss">
  $header_height: 70px;
  .header {
    height: $header_height;
  }
  .logo {
    font-size: 30px;
    color: cadetblue;
    font-weight: bold;
  }
  nav {
    .nav-level1 {
      white-space: nowrap;
      display: flex;
      > li {
        position: relative;
        padding: 15px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &:hover {
          > .nav-level2 {
            opacity: 1;
            max-width: 500px;
            transform: rotate(2deg);
            z-index: 999;
          }
        }
      }
    }
    .nav-level2 {
      position:absolute;
      left: 0;
      top:90%;
      opacity: 1;
      width: auto;
      max-width: 0;
      background: white;
      white-space: nowrap;
      overflow: hidden;
      align-self: flex-start;
      margin-left: 15px;
      box-shadow: 1px 1px 10px rgba(100, 100, 100, 0.1);
      transition: opacity 0.5s, max-width 0.5s, transform 0.2s;
      
      li {
        padding: 15px;
        position: relative;
        box-shadow: 1px 1px rgba(100, 100, 100, 0.1);
        transition: background-color 0.2s;
        &::after{
            content: "";
            display: block;
            background: coral;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 5px;
            transition: width 0.5s ease-in-out;
        }
        &:hover{
          background-color: cadetblue;
          color: white;
          &::after{
            width: 100%;
          }
          
        }
      }
    }
  }
</style>

<div class="header">
  <div class="h-full container mx-auto flex justify-start items-center">
    <a href=".">
      <div class="logo">
        <h1 class="">LOGO</h1>
      </div>
    </a>

    <nav class="h-full">
      <ul class="nav-level1 h-full">
        <li>
          Menu 1
          <ul class="nav-level2">
            <li>Sub Menu 1 Sub Menu 1</li>
            <li>Sub Menu 1</li>
            <li>Sub Menu 1 Sub Menu 1</li>
            <li>Sub Menu 1</li>
          </ul>
        </li>

        <li>
          Menu 2
          <ul class="nav-level2">
            <li>Sub Menu 2-Sub Menu 2</li>
            <li>Sub Menu 2</li>
          </ul>
        </li>

        <li>
          Menu 3
          <ul class="nav-level2">
            <li>Sub Menu 3-Sub Menu 3</li>
            <li>Sub Menu 3</li>
          </ul>
        </li>

      </ul>
    </nav>

  </div>
</div>
