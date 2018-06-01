<template>
  <div class="Sidebar">
    <div class="Sidebar__imageContainer">
      <img src="https://pp.userapi.com/c836730/v836730182/59aa7/vQc0aZTuKto.jpg" alt="null">
      <p class="imageContainer__myname">Andrei</p>
    </div>
    <div class="ContactsBlock">
      <p class="ContactsBlock__element ContactsBlock__status">Searching for new job Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque accusamus assumenda ut magnam, provident numquam dolorem explicabo saepe a illo nobis corporis beatae quis voluptatibus praesentium architecto placeat facere rerum?</p>
      <div class="hr"></div>

      <p class="ContactsBlock__element ContactsBlock__specialization">
        <i class="fas fa-briefcase element__icon"></i>
        Front-End Developer
      </p>

      <p class="ContactsBlock__element ContactsBlock__address">
        <i class="far fa-building element__icon"></i>
        Belarus, Minsk
      </p>

      <p class="ContactsBlock__element ContactsBlock__email">
        <i class="far fa-envelope element__icon"></i>
        2119930@gmail.com
      </p>

      <p class="ContactsBlock__element ContactsBlock__phone">
        <i class="fas fa-phone-volume element__icon"></i>
        +375 (29) 66-55-275
      </p>

    </div>
    <div class="hr"></div>
    <!--  -->



    <div class="SidebarBlock">
      <p class="SidebarBlock__title">
        <i class="fas fa-check title__icon"></i>
        Skills
      </p>

      <div class="SidebarBlock__SubBlocks">

        <div class="SubBlock">
          <p class="SubBlock__title">C#</p>
          <div class="SubBlock__progressBar">
            <div class="progressBar__filler">
              70%
            </div>
          </div>
        </div>
        <div class="SubBlock">
          <p class="SubBlock__title">React</p>
          <div class="SubBlock__progressBar">
            <div class="progressBar__filler">
              60%
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="SidebarBlock">
      <p class="SidebarBlock__title">
        <i class="fas fa-globe title__icon"></i>
        Languages
      </p>

      <div class="SidebarBlock__SubBlocks">

        <div class="SubBlock">
          <p class="SubBlock__title">English</p>
          <div class="SubBlock__progressBar">
            <div class="progressBar__filler">
              70%
            </div>
          </div>
        </div>
        <div class="SubBlock">
          <p class="SubBlock__title">Russian</p>
          <div class="SubBlock__progressBar">
            <div class="progressBar__filler">
              100%
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.Sidebar{
  width: 33.333%;
  box-shadow: 0px 0px 30px 5px rgb(199, 199, 199);
}
.Sidebar__imageContainer{
  position: relative;
  background-color: #fff;
  max-width: 100%;
  max-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.Sidebar__imageContainer img{
  max-width: 100%;
  max-height: 100%;
}
.imageContainer__myname{
  font-size: 32px;
  position: absolute;
  color: #eee;
  bottom: 10%;
  left: 10%;
  font-family: 'Montserrat Alternates', sans-serif;
  font-style: italic;
}
.ContactsBlock{
  width: 100%;
}
.ContactsBlock__element{
  font-size: 20px;
  padding: 5px;
  margin: 10px 0;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.title__icon,
.element__icon{
  display: inline-block;
  margin: 0 15px;
  font-size: 25px;
  color: #2fa06d;
}
.ContactsBlock__status{
  padding: 20px 15px;
  font-style: italic;
  font-weight: 700;
  text-align: center;
}
.hr{
  width: 90%;
  margin: auto;
  height: 1px;
  box-shadow: 0px 4px 2px rgba(51, 51, 51, 0.397);
  margin-top: 10px;
  margin-bottom: 30px;
}


.SidebarBlock{
  width: 100%;
  /* margin: 5px 0; */
}
.SidebarBlock__title{
  width: 100%;
  margin-left: 30px;
  text-align: left;
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.title__icon{
  margin-left: 10px;
  margin-right: 20px;
  font-size: 30px;
}
.SidebarBlock__SubBlocks{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0;
}
.SubBlock{
  width: 100%;
  padding: 15px;
}
.SubBlock__title{
  font-size: 20px;
  margin-bottom: 8px;
}
.SubBlock__progressBar{
  width: 90%;
  margin: auto;
  background: rgb(184, 184, 184);
  border-radius: 25px;
}
.progressBar__filler{
  font-size: 18px;
  max-width: 100%;
  background: #2fa06d;
  color: #eee;
  border-radius: 25px;
  height: 100%;
  padding: 5px 0;
}
</style>

