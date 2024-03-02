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

rolled back at least 3 times, hoping its ok now
2024-02-03
10:08AM EST

im an idiot that spent 40 minutes trying to fix something that was only a simple change of the content-list html file. whatever its done now. no more errors
are occuring, going to submit now.
2024-02-03
10:53AM EST

began work on assignment 3 a day early as my saturday is very packed. adjusting array per instructions.
2024-02-09
12:31PM EST


after much coding (albeit not hard as for the pipe i simply used angular's generative command), initial problem arose in the form of;
[{
	"resource": "/c:/Users/Dennis/Desktop/D_Kontoulis_WEB601Assignments_FavGames/D-Kontoulis-WEB601Assignments-FavGames/D_Kontoulis_FavouriteGames/src/app/content-list/content-list.component.ts",
	"owner": "typescript",
	"code": "2322",
	"severity": 8,
	"message": "Type '(string | undefined)[]' is not assignable to type 'string[]'.\n  Type 'string | undefined' is not assignable to type 'string'.\n    Type 'undefined' is not assignable to type 'string'.",
	"source": "ts",
	"startLineNumber": 94,
	"startColumn": 5,
	"endLineNumber": 94,
	"endColumn": 15
}]

adjusted the types array to help TypeScript infer the type correctly. as such, i degined it specifically as an arary of strings.
2024-02-09
12:43PM EST

been wrestling with this to get it to work. got odwn to just one error message, need to build out some logic for getting card styles and what not.
2024-02-09
13:08 EST

everythign is showing up now but it isn't splitting the lists nor are the borders being correctly generated. attempting a fix now.
2024-02-09
13:13EST

ok i managed to get all my colours to show, but i'm realizing the list iterated one too many times. going to adjust my ngFor logic so that this doesnt happen
2024-02-09
13:37 EST

played with the content-list.component.html for a bit and turns out that it was literally one line in <h2>{{ type }}</h2> creating issues. i got rid of it
and everything is displaying correctly now. items without a type don't get a special background; they're separated and those that do have a type get a diff colour
based on that type.
2024-02-09
13:42 EST

getting started on assignment 4 a couple days early; out of town from tomorrow morning until Sunday night and thus will not have access to my desktop and github  by extension.
2024-02-22
09:16AM

bathroom break and then some code.  adjusted content-card-component.html to show a default img if imgURL isn't set. next is integrating a directive named hover-affect
2024-02-22
09:39 AM

generated hover affect directive via ng generate directive HoverAffect
2024-02-22
09:41 AM

put togethr hover affect directive; pretty simple to put together. need to adjust HTML next to actually make it function
2024-02-22
09:52 AM

ok for some reason the hover isnt working. going to try and debug now
2024-02-22
09:56 AM

lol forgot to import stuff into the typescript file. we're good now. this was a shockingly simple assignment!
2024-02-22
10:03 AM

up bright and early and starting work again.  ran the commmand to create the create-content component.
2024-03-02
09:41AM