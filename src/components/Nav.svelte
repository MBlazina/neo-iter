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
      display: flex;
      >li{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
          >.nav-level2{
            display: block;
          } 
        }
      }
    }
    .nav-level2{
      position: absolute;
      top: 70px;
      left: 0;
      margin-right: -100vw;
      display: none;
      border: 1px solid;
    }
  }
</style>

<div class="header bg-gray-400">
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
