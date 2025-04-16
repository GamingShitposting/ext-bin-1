gdjs.OpeningCode = {};
gdjs.OpeningCode.localVariables = [];
gdjs.OpeningCode.GDCompanyLogoObjects1= [];
gdjs.OpeningCode.GDCompanyLogoObjects2= [];
gdjs.OpeningCode.GDCompanyLogoObjects3= [];
gdjs.OpeningCode.GDCompanyLogoObjects4= [];
gdjs.OpeningCode.GDCompanyNameObjects1= [];
gdjs.OpeningCode.GDCompanyNameObjects2= [];
gdjs.OpeningCode.GDCompanyNameObjects3= [];
gdjs.OpeningCode.GDCompanyNameObjects4= [];
gdjs.OpeningCode.GDWARINGObjects1= [];
gdjs.OpeningCode.GDWARINGObjects2= [];
gdjs.OpeningCode.GDWARINGObjects3= [];
gdjs.OpeningCode.GDWARINGObjects4= [];
gdjs.OpeningCode.GDYellowDialougeBoxObjects1= [];
gdjs.OpeningCode.GDYellowDialougeBoxObjects2= [];
gdjs.OpeningCode.GDYellowDialougeBoxObjects3= [];
gdjs.OpeningCode.GDYellowDialougeBoxObjects4= [];
gdjs.OpeningCode.GDWARING2Objects1= [];
gdjs.OpeningCode.GDWARING2Objects2= [];
gdjs.OpeningCode.GDWARING2Objects3= [];
gdjs.OpeningCode.GDWARING2Objects4= [];
gdjs.OpeningCode.GDWarningTextObjects1= [];
gdjs.OpeningCode.GDWarningTextObjects2= [];
gdjs.OpeningCode.GDWarningTextObjects3= [];
gdjs.OpeningCode.GDWarningTextObjects4= [];
gdjs.OpeningCode.GDProceedTextObjects1= [];
gdjs.OpeningCode.GDProceedTextObjects2= [];
gdjs.OpeningCode.GDProceedTextObjects3= [];
gdjs.OpeningCode.GDProceedTextObjects4= [];
gdjs.OpeningCode.GDOpeningMovieObjects1= [];
gdjs.OpeningCode.GDOpeningMovieObjects2= [];
gdjs.OpeningCode.GDOpeningMovieObjects3= [];
gdjs.OpeningCode.GDOpeningMovieObjects4= [];


gdjs.OpeningCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14072212);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};gdjs.OpeningCode.asyncCallback14076300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("ProceedText"), gdjs.OpeningCode.GDProceedTextObjects4);
gdjs.copyArray(runtimeScene.getObjects("WARING"), gdjs.OpeningCode.GDWARINGObjects4);
gdjs.copyArray(runtimeScene.getObjects("WARING2"), gdjs.OpeningCode.GDWARING2Objects4);
gdjs.copyArray(runtimeScene.getObjects("WarningText"), gdjs.OpeningCode.GDWarningTextObjects4);
gdjs.copyArray(runtimeScene.getObjects("YellowDialougeBox"), gdjs.OpeningCode.GDYellowDialougeBoxObjects4);
{for(var i = 0, len = gdjs.OpeningCode.GDYellowDialougeBoxObjects4.length ;i < len;++i) {
    gdjs.OpeningCode.GDYellowDialougeBoxObjects4[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 1.5, false);
}
for(var i = 0, len = gdjs.OpeningCode.GDWARINGObjects4.length ;i < len;++i) {
    gdjs.OpeningCode.GDWARINGObjects4[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 1.5, false);
}
for(var i = 0, len = gdjs.OpeningCode.GDWarningTextObjects4.length ;i < len;++i) {
    gdjs.OpeningCode.GDWarningTextObjects4[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 1.5, false);
}
for(var i = 0, len = gdjs.OpeningCode.GDWARING2Objects4.length ;i < len;++i) {
    gdjs.OpeningCode.GDWARING2Objects4[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 1.5, false);
}
for(var i = 0, len = gdjs.OpeningCode.GDProceedTextObjects4.length ;i < len;++i) {
    gdjs.OpeningCode.GDProceedTextObjects4[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 1.5, false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.OpeningCode.asyncCallback14076300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OpeningCode.asyncCallback14075836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("CompanyLogo"), gdjs.OpeningCode.GDCompanyLogoObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("CompanyName"), gdjs.OpeningCode.GDCompanyNameObjects3);

{for(var i = 0, len = gdjs.OpeningCode.GDCompanyLogoObjects3.length ;i < len;++i) {
    gdjs.OpeningCode.GDCompanyLogoObjects3[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1.5, true);
}
for(var i = 0, len = gdjs.OpeningCode.GDCompanyNameObjects3.length ;i < len;++i) {
    gdjs.OpeningCode.GDCompanyNameObjects3[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1.5, true);
}
}
{ //Subevents
gdjs.OpeningCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
for (const obj of gdjs.OpeningCode.GDCompanyLogoObjects2) asyncObjectsList.addObject("CompanyLogo", obj);
for (const obj of gdjs.OpeningCode.GDCompanyNameObjects2) asyncObjectsList.addObject("CompanyName", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.OpeningCode.asyncCallback14075836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OpeningCode.asyncCallback14074724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("CompanyLogo"), gdjs.OpeningCode.GDCompanyLogoObjects2);
gdjs.copyArray(runtimeScene.getObjects("CompanyName"), gdjs.OpeningCode.GDCompanyNameObjects2);
{for(var i = 0, len = gdjs.OpeningCode.GDCompanyLogoObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDCompanyLogoObjects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 1.5, false);
}
for(var i = 0, len = gdjs.OpeningCode.GDCompanyNameObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDCompanyNameObjects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 1.5, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "415209__inspectorj__cat-screaming-a.wav", false, 100, 1);
}
{ //Subevents
gdjs.OpeningCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.OpeningCode.asyncCallback14074724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OpeningCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13947836);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CompanyLogo"), gdjs.OpeningCode.GDCompanyLogoObjects2);
gdjs.copyArray(runtimeScene.getObjects("CompanyName"), gdjs.OpeningCode.GDCompanyNameObjects2);
gdjs.copyArray(runtimeScene.getObjects("OpeningMovie"), gdjs.OpeningCode.GDOpeningMovieObjects2);
gdjs.copyArray(runtimeScene.getObjects("ProceedText"), gdjs.OpeningCode.GDProceedTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("WARING"), gdjs.OpeningCode.GDWARINGObjects2);
gdjs.copyArray(runtimeScene.getObjects("WARING2"), gdjs.OpeningCode.GDWARING2Objects2);
gdjs.copyArray(runtimeScene.getObjects("WarningText"), gdjs.OpeningCode.GDWarningTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("YellowDialougeBox"), gdjs.OpeningCode.GDYellowDialougeBoxObjects2);
{for(var i = 0, len = gdjs.OpeningCode.GDCompanyLogoObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDCompanyLogoObjects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.OpeningCode.GDCompanyNameObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDCompanyNameObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.OpeningCode.GDOpeningMovieObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDOpeningMovieObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.OpeningCode.GDYellowDialougeBoxObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDYellowDialougeBoxObjects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.OpeningCode.GDWARINGObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDWARINGObjects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.OpeningCode.GDWarningTextObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDWarningTextObjects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.OpeningCode.GDWARING2Objects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDWARING2Objects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.OpeningCode.GDProceedTextObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDProceedTextObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14074804);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.OpeningCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.OpeningCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("WARING"), gdjs.OpeningCode.GDWARINGObjects1);
gdjs.copyArray(runtimeScene.getObjects("WARING2"), gdjs.OpeningCode.GDWARING2Objects1);
{for(var i = 0, len = gdjs.OpeningCode.GDWARINGObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDWARINGObjects1[i].setXOffset(gdjs.OpeningCode.GDWARINGObjects1[i].getXOffset() + (-(2)));
}
}{for(var i = 0, len = gdjs.OpeningCode.GDWARING2Objects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDWARING2Objects1[i].setXOffset(gdjs.OpeningCode.GDWARING2Objects1[i].getXOffset() + (-(2)));
}
}}

}


};gdjs.OpeningCode.asyncCallback14081028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("ProceedText"), gdjs.OpeningCode.GDProceedTextObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("WARING"), gdjs.OpeningCode.GDWARINGObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("WARING2"), gdjs.OpeningCode.GDWARING2Objects3);

gdjs.copyArray(asyncObjectsList.getObjects("WarningText"), gdjs.OpeningCode.GDWarningTextObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("YellowDialougeBox"), gdjs.OpeningCode.GDYellowDialougeBoxObjects3);

{for(var i = 0, len = gdjs.OpeningCode.GDWarningTextObjects3.length ;i < len;++i) {
    gdjs.OpeningCode.GDWarningTextObjects3[i].getBehavior("Text").setText("THIS GAME DOES NOT SAVE!\n\nCertain points in the game are re-accessible from the chapter select screen in the main menu.\nThese points include:\n\nChapter 1\nEighth Day (gameplay)\nChapter 2\n\nTHIS IS A SPOILER-HEAVY GAME AND SKIPPING AHEAD MAY EFFECT YOUR ENJOYMENT\n\nEach chapter is 1-2 hours long\n");
}
}{for(var i = 0, len = gdjs.OpeningCode.GDYellowDialougeBoxObjects3.length ;i < len;++i) {
    gdjs.OpeningCode.GDYellowDialougeBoxObjects3[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 0.5, false);
}
for(var i = 0, len = gdjs.OpeningCode.GDWARINGObjects3.length ;i < len;++i) {
    gdjs.OpeningCode.GDWARINGObjects3[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 0.5, false);
}
for(var i = 0, len = gdjs.OpeningCode.GDWarningTextObjects3.length ;i < len;++i) {
    gdjs.OpeningCode.GDWarningTextObjects3[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 0.5, false);
}
for(var i = 0, len = gdjs.OpeningCode.GDWARING2Objects3.length ;i < len;++i) {
    gdjs.OpeningCode.GDWARING2Objects3[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 0.5, false);
}
for(var i = 0, len = gdjs.OpeningCode.GDProceedTextObjects3.length ;i < len;++i) {
    gdjs.OpeningCode.GDProceedTextObjects3[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 0.5, false);
}
}gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
for (const obj of gdjs.OpeningCode.GDProceedTextObjects2) asyncObjectsList.addObject("ProceedText", obj);
for (const obj of gdjs.OpeningCode.GDWARINGObjects2) asyncObjectsList.addObject("WARING", obj);
for (const obj of gdjs.OpeningCode.GDWARING2Objects2) asyncObjectsList.addObject("WARING2", obj);
for (const obj of gdjs.OpeningCode.GDWarningTextObjects2) asyncObjectsList.addObject("WarningText", obj);
for (const obj of gdjs.OpeningCode.GDYellowDialougeBoxObjects2) asyncObjectsList.addObject("YellowDialougeBox", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.OpeningCode.asyncCallback14081028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OpeningCode.asyncCallback14083940 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("OpeningMovie"), gdjs.OpeningCode.GDOpeningMovieObjects2);
{for(var i = 0, len = gdjs.OpeningCode.GDOpeningMovieObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDOpeningMovieObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.OpeningCode.GDOpeningMovieObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDOpeningMovieObjects2[i].play();
}
}gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.OpeningCode.asyncCallback14083940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OpeningCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14078300);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spam");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spam") >= 0.6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14080084);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ProceedText"), gdjs.OpeningCode.GDProceedTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("WARING"), gdjs.OpeningCode.GDWARINGObjects2);
gdjs.copyArray(runtimeScene.getObjects("WARING2"), gdjs.OpeningCode.GDWARING2Objects2);
gdjs.copyArray(runtimeScene.getObjects("WarningText"), gdjs.OpeningCode.GDWarningTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("YellowDialougeBox"), gdjs.OpeningCode.GDYellowDialougeBoxObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spam");
}{for(var i = 0, len = gdjs.OpeningCode.GDYellowDialougeBoxObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDYellowDialougeBoxObjects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 0.5, false);
}
for(var i = 0, len = gdjs.OpeningCode.GDWARINGObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDWARINGObjects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 0.5, false);
}
for(var i = 0, len = gdjs.OpeningCode.GDWarningTextObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDWarningTextObjects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 0.5, false);
}
for(var i = 0, len = gdjs.OpeningCode.GDWARING2Objects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDWARING2Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 0.5, false);
}
for(var i = 0, len = gdjs.OpeningCode.GDProceedTextObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDProceedTextObjects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 0.5, false);
}
}
{ //Subevents
gdjs.OpeningCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spam") >= 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14083308);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ProceedText"), gdjs.OpeningCode.GDProceedTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("WARING"), gdjs.OpeningCode.GDWARINGObjects1);
gdjs.copyArray(runtimeScene.getObjects("WARING2"), gdjs.OpeningCode.GDWARING2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WarningText"), gdjs.OpeningCode.GDWarningTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("YellowDialougeBox"), gdjs.OpeningCode.GDYellowDialougeBoxObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.OpeningCode.GDYellowDialougeBoxObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDYellowDialougeBoxObjects1[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1.5, true);
}
for(var i = 0, len = gdjs.OpeningCode.GDWARINGObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDWARINGObjects1[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1.5, true);
}
for(var i = 0, len = gdjs.OpeningCode.GDWarningTextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDWarningTextObjects1[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1.5, true);
}
for(var i = 0, len = gdjs.OpeningCode.GDWARING2Objects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDWARING2Objects1[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1.5, true);
}
for(var i = 0, len = gdjs.OpeningCode.GDProceedTextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDProceedTextObjects1[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1.5, true);
}
}
{ //Subevents
gdjs.OpeningCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.OpeningCode.asyncCallback14085764 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.OpeningCode.asyncCallback14085764(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OpeningCode.asyncCallback14085596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("OpeningMovie"), gdjs.OpeningCode.GDOpeningMovieObjects2);

{for(var i = 0, len = gdjs.OpeningCode.GDOpeningMovieObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDOpeningMovieObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.OpeningCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
for (const obj of gdjs.OpeningCode.GDOpeningMovieObjects1) asyncObjectsList.addObject("OpeningMovie", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.OpeningCode.asyncCallback14085596(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OpeningCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OpeningMovie"), gdjs.OpeningCode.GDOpeningMovieObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OpeningCode.GDOpeningMovieObjects1.length;i<l;++i) {
    if ( gdjs.OpeningCode.GDOpeningMovieObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.OpeningCode.GDOpeningMovieObjects1[k] = gdjs.OpeningCode.GDOpeningMovieObjects1[i];
        ++k;
    }
}
gdjs.OpeningCode.GDOpeningMovieObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14085412);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.OpeningCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.OpeningCode.eventsList12 = function(runtimeScene) {

{


gdjs.OpeningCode.eventsList0(runtimeScene);
}


{


gdjs.OpeningCode.eventsList4(runtimeScene);
}


{


gdjs.OpeningCode.eventsList5(runtimeScene);
}


{


gdjs.OpeningCode.eventsList8(runtimeScene);
}


{


gdjs.OpeningCode.eventsList11(runtimeScene);
}


};

gdjs.OpeningCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OpeningCode.GDCompanyLogoObjects1.length = 0;
gdjs.OpeningCode.GDCompanyLogoObjects2.length = 0;
gdjs.OpeningCode.GDCompanyLogoObjects3.length = 0;
gdjs.OpeningCode.GDCompanyLogoObjects4.length = 0;
gdjs.OpeningCode.GDCompanyNameObjects1.length = 0;
gdjs.OpeningCode.GDCompanyNameObjects2.length = 0;
gdjs.OpeningCode.GDCompanyNameObjects3.length = 0;
gdjs.OpeningCode.GDCompanyNameObjects4.length = 0;
gdjs.OpeningCode.GDWARINGObjects1.length = 0;
gdjs.OpeningCode.GDWARINGObjects2.length = 0;
gdjs.OpeningCode.GDWARINGObjects3.length = 0;
gdjs.OpeningCode.GDWARINGObjects4.length = 0;
gdjs.OpeningCode.GDYellowDialougeBoxObjects1.length = 0;
gdjs.OpeningCode.GDYellowDialougeBoxObjects2.length = 0;
gdjs.OpeningCode.GDYellowDialougeBoxObjects3.length = 0;
gdjs.OpeningCode.GDYellowDialougeBoxObjects4.length = 0;
gdjs.OpeningCode.GDWARING2Objects1.length = 0;
gdjs.OpeningCode.GDWARING2Objects2.length = 0;
gdjs.OpeningCode.GDWARING2Objects3.length = 0;
gdjs.OpeningCode.GDWARING2Objects4.length = 0;
gdjs.OpeningCode.GDWarningTextObjects1.length = 0;
gdjs.OpeningCode.GDWarningTextObjects2.length = 0;
gdjs.OpeningCode.GDWarningTextObjects3.length = 0;
gdjs.OpeningCode.GDWarningTextObjects4.length = 0;
gdjs.OpeningCode.GDProceedTextObjects1.length = 0;
gdjs.OpeningCode.GDProceedTextObjects2.length = 0;
gdjs.OpeningCode.GDProceedTextObjects3.length = 0;
gdjs.OpeningCode.GDProceedTextObjects4.length = 0;
gdjs.OpeningCode.GDOpeningMovieObjects1.length = 0;
gdjs.OpeningCode.GDOpeningMovieObjects2.length = 0;
gdjs.OpeningCode.GDOpeningMovieObjects3.length = 0;
gdjs.OpeningCode.GDOpeningMovieObjects4.length = 0;

gdjs.OpeningCode.eventsList12(runtimeScene);
gdjs.OpeningCode.GDCompanyLogoObjects1.length = 0;
gdjs.OpeningCode.GDCompanyLogoObjects2.length = 0;
gdjs.OpeningCode.GDCompanyLogoObjects3.length = 0;
gdjs.OpeningCode.GDCompanyLogoObjects4.length = 0;
gdjs.OpeningCode.GDCompanyNameObjects1.length = 0;
gdjs.OpeningCode.GDCompanyNameObjects2.length = 0;
gdjs.OpeningCode.GDCompanyNameObjects3.length = 0;
gdjs.OpeningCode.GDCompanyNameObjects4.length = 0;
gdjs.OpeningCode.GDWARINGObjects1.length = 0;
gdjs.OpeningCode.GDWARINGObjects2.length = 0;
gdjs.OpeningCode.GDWARINGObjects3.length = 0;
gdjs.OpeningCode.GDWARINGObjects4.length = 0;
gdjs.OpeningCode.GDYellowDialougeBoxObjects1.length = 0;
gdjs.OpeningCode.GDYellowDialougeBoxObjects2.length = 0;
gdjs.OpeningCode.GDYellowDialougeBoxObjects3.length = 0;
gdjs.OpeningCode.GDYellowDialougeBoxObjects4.length = 0;
gdjs.OpeningCode.GDWARING2Objects1.length = 0;
gdjs.OpeningCode.GDWARING2Objects2.length = 0;
gdjs.OpeningCode.GDWARING2Objects3.length = 0;
gdjs.OpeningCode.GDWARING2Objects4.length = 0;
gdjs.OpeningCode.GDWarningTextObjects1.length = 0;
gdjs.OpeningCode.GDWarningTextObjects2.length = 0;
gdjs.OpeningCode.GDWarningTextObjects3.length = 0;
gdjs.OpeningCode.GDWarningTextObjects4.length = 0;
gdjs.OpeningCode.GDProceedTextObjects1.length = 0;
gdjs.OpeningCode.GDProceedTextObjects2.length = 0;
gdjs.OpeningCode.GDProceedTextObjects3.length = 0;
gdjs.OpeningCode.GDProceedTextObjects4.length = 0;
gdjs.OpeningCode.GDOpeningMovieObjects1.length = 0;
gdjs.OpeningCode.GDOpeningMovieObjects2.length = 0;
gdjs.OpeningCode.GDOpeningMovieObjects3.length = 0;
gdjs.OpeningCode.GDOpeningMovieObjects4.length = 0;


return;

}

gdjs['OpeningCode'] = gdjs.OpeningCode;
