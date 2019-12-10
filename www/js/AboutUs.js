class AboutUs {

  /*
    I am an About Us page.
    I display info about us.
  */

  render() {
    $('main').attr('data-page','about-us-page');
    $('main').html(/*html*/`
      <section class="container mt-3 data-aboutUs text-center">
        <section class="row w-100">
          <article class="col-lg-5 col-sm-12">
            <img class="aboutUsPic" src="../images/homeSnake2.jpg">  
          </article>
          <article class="col-lg-7 col-sm-12">
            <h2 class="quickTipRubrik text-center">
              Om Snakebaby
            </h2>  
            <p>Snakebaby är Sveriges största, rikstäckade ormkedja som erbjuder de bästa djuren. 
              Vårt sortiment är noga utvalt och innehåller alla ormar du kan tänkas behöva. 
              Sortimentet är brett och prisvärt och du hittar välkända ormar av högsta kvalitet. 
              Förutom ett stort antal fysiska butiker från norr till söder har vi en gedigen e-handel. 
              I e-handeln får du samma goda service, lika brett sortiment och samma kunskap som i våra butiker. 
              Ett besök hos oss ska ge dig en härlig upplevelse fylld av inspiration.
            </p>
          </article>
        </section>
        <section class="row w-100">
          <article class="col-lg-5 col-sm-12">
            <img class="aboutUsPic" src="../images/homeSnake1.jpg">  
          </article>
          <article class="col-lg-7 col-sm-12">
            <h2 class="quickTipRubrik text-center">
              Full service, trygghet och goda råd
            </h2>
            <p>
              Snakebaby grundades 1987 och har alltså över 30 års erfarenhet i branschen.					
              Därför kan du alltid vara säker på att vi erbjuder det bästa till dig och ditt terrarium.
              Det är viktigt att du som kund känner dig trygg när du handlar hos oss. 
              Genom rätt kunskap och bra service kan du lita på att du får det du förväntar dig av oss. 
              Du är alltid varmt välkommen att kontakta vår kunniga kundservice om du har frågor eller behöver rådgivning.
            </p>
            <p>
              Sedan 2015 är Snakebaby en del av nordens största ormkedjekoncept, Slithery Group, med över 200 butiker i Sverige, Norge och Finland.
            </p>
          </article>
        </section>

        <section class="row text-center">
          <article class="quickTip col-lg-5 col-sm-12 mt-2">
          <h5 class="text-center mt-2">
            Att tänka på som ormägare
          </h5>
            <ul>
              <li class="mt-1">
                Innan man bestämmer sig för att skaffa orm är det viktigt att sätta sig in i vad det innebär att ha en orm
              </li>
              <li>
                Var medveten om att det finns olika sorters ormar och att de kräver olika miljöer, temperaturer, luftfuktighet mm..
              </li>
            </ul>
          </article>
          <article class="col-lg-7 col-sm-12">
            <p>
              Vårt mål är att det ska vara roligt för dig som kund att besöka Snakebaby. 
              Våra medarbetare har spetskompetenser inom olika områden och brinner för att få dela sin kunskap med dig. 
              Tveka inte att ställa frågor om du undrar något. 
              För att stärka banden med dig som kund och mellan dig och din orm arrangerar vi både lokala och rikstäckande event, t ex. ormpromenader och ormträffar. 
              Hör med din närmsta butik om det är något på gång i din stad.
            </p>
            <p class="mt-3">
              <strong>Välkommen till Snakebaby. Vi älskar ormar.</strong>
            </p>
          </article>
        </section>
      </section>
      `);
  }
}