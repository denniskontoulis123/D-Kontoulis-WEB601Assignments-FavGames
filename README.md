# D Kontoulis WEB601Assignments FavGames
 
Began work at roughly 2pm.  Installed Node roughly a week ago and have left this to the last minute as it seemed pretty straight forward.  My version is newer than 16
but everything seems to run fine upon running the Angular Creation command:
ng new D_Kontoulis_FavouriteGames --style=scss --routing=false

2024-01-27
14:15PM EST


Added scripts to the package + updated it to 0.0.1.  Ran said scripts via:
npm run-script generatecomponent to generate a component
npm run-script generatepipe to generate a pipe
npm run-script generatedirective to generate a directive
Also built out the interface per instructions in the lab, exported and imported to ContentList class.
2024-01-27
14:30PM EST

coded all this stuff out but it only displays the title and not the actual list; attempting to resolve now. think i need to import something else.
2024-01-27
14:48PM EST

i was right; just had to import CommonModule 
new line of code was; import { CommonModule } from '@angular/common';
everything works now!
2024-01-27
14:48PM EST

Starting work on assignment 2; commenting out the ContentList implementation and then subsequently deleting the content-list.ts per instructions.
2024-02-03
09:05AM EST

ran ng generate component ContentList again per instructions
2024-02-03
09:13AM EST

put together an array per instructions; this time more of a focus on adventure/open world/action games. so far so good other than forgetting how to determine
paths for imports and such haha.
2024-02-03
09:23AM EST

used some Ifs and Fors to iterate thru information more seamlessly as far as the content-card display goes. see content-card.component.html for the code.
2024-02-03
09:28AM EST

having a hard time getting this to work now; getting a bunch of errors when i try to run. initially ti was just;
X [ERROR] NG8001: 'app-content-list' is not a known element:
1. If 'app-content-list' is an Angular component, then verify that it is included in the '@Component.imports' of this component.
2. If 'app-content-list' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@Component.schemas' of this component to suppress this message. [plugin angular-compiler]

    src/app/app.component.html:0:0:
      0 │ 
        ╵ ^

  Error occurs in the template of component AppComponent.

    src/app/app.component.ts:8:15:
      8 │   templateUrl: './app.component.html',
        ╵                ~~~~~~~~~~~~~~~~~~~~~~

but upon adjusting app.component.html the project would start and then produced a long list of type errors. furhter work required.
2024-02-03
09:40AM EST

decided to roll back the change and tackle the initial error message
2024-02-03
09:41AM EST

ok im just going to start over because i am hopelessly in the weeds. back in a few
2024-02-03
09:53AM EST