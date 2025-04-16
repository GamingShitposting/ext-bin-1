gdjs.End_32CreditsCode = {};
gdjs.End_32CreditsCode.localVariables = [];
gdjs.End_32CreditsCode.GDNameObjects1= [];
gdjs.End_32CreditsCode.GDNameObjects2= [];
gdjs.End_32CreditsCode.GDNameObjects3= [];
gdjs.End_32CreditsCode.GDNameObjects4= [];
gdjs.End_32CreditsCode.GDYellowDialougeBoxObjects1= [];
gdjs.End_32CreditsCode.GDYellowDialougeBoxObjects2= [];
gdjs.End_32CreditsCode.GDYellowDialougeBoxObjects3= [];
gdjs.End_32CreditsCode.GDYellowDialougeBoxObjects4= [];
gdjs.End_32CreditsCode.GDFade2Objects1= [];
gdjs.End_32CreditsCode.GDFade2Objects2= [];
gdjs.End_32CreditsCode.GDFade2Objects3= [];
gdjs.End_32CreditsCode.GDFade2Objects4= [];
gdjs.End_32CreditsCode.GDCreditsObjects1= [];
gdjs.End_32CreditsCode.GDCreditsObjects2= [];
gdjs.End_32CreditsCode.GDCreditsObjects3= [];
gdjs.End_32CreditsCode.GDCreditsObjects4= [];


gdjs.End_32CreditsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14223444);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fade2"), gdjs.End_32CreditsCode.GDFade2Objects1);
{for(var i = 0, len = gdjs.End_32CreditsCode.GDFade2Objects1.length ;i < len;++i) {
    gdjs.End_32CreditsCode.GDFade2Objects1[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1, false);
}
}}

}


};gdjs.End_32CreditsCode.asyncCallback14225956 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.End_32CreditsCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}gdjs.End_32CreditsCode.localVariables.length = 0;
}
gdjs.End_32CreditsCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.End_32CreditsCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.End_32CreditsCode.asyncCallback14225956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.End_32CreditsCode.asyncCallback14225628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.End_32CreditsCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Credits"), gdjs.End_32CreditsCode.GDCreditsObjects3);

{for(var i = 0, len = gdjs.End_32CreditsCode.GDCreditsObjects3.length ;i < len;++i) {
    gdjs.End_32CreditsCode.GDCreditsObjects3[i].pause();
}
}
{ //Subevents
gdjs.End_32CreditsCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.End_32CreditsCode.localVariables.length = 0;
}
gdjs.End_32CreditsCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.End_32CreditsCode.localVariables);
/* Don't save Credits as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.End_32CreditsCode.asyncCallback14225628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.End_32CreditsCode.asyncCallback14224900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.End_32CreditsCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Fade2"), gdjs.End_32CreditsCode.GDFade2Objects2);
{for(var i = 0, len = gdjs.End_32CreditsCode.GDFade2Objects2.length ;i < len;++i) {
    gdjs.End_32CreditsCode.GDFade2Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 3, false);
}
}
{ //Subevents
gdjs.End_32CreditsCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.End_32CreditsCode.localVariables.length = 0;
}
gdjs.End_32CreditsCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.End_32CreditsCode.localVariables);
for (const obj of gdjs.End_32CreditsCode.GDCreditsObjects1) asyncObjectsList.addObject("Credits", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(109), (runtimeScene) => (gdjs.End_32CreditsCode.asyncCallback14224900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.End_32CreditsCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14224676);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.End_32CreditsCode.GDCreditsObjects1);
{for(var i = 0, len = gdjs.End_32CreditsCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.End_32CreditsCode.GDCreditsObjects1[i].play();
}
}
{ //Subevents
gdjs.End_32CreditsCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.End_32CreditsCode.eventsList5 = function(runtimeScene) {

{


gdjs.End_32CreditsCode.eventsList0(runtimeScene);
}


{


gdjs.End_32CreditsCode.eventsList4(runtimeScene);
}


};

gdjs.End_32CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.End_32CreditsCode.GDNameObjects1.length = 0;
gdjs.End_32CreditsCode.GDNameObjects2.length = 0;
gdjs.End_32CreditsCode.GDNameObjects3.length = 0;
gdjs.End_32CreditsCode.GDNameObjects4.length = 0;
gdjs.End_32CreditsCode.GDYellowDialougeBoxObjects1.length = 0;
gdjs.End_32CreditsCode.GDYellowDialougeBoxObjects2.length = 0;
gdjs.End_32CreditsCode.GDYellowDialougeBoxObjects3.length = 0;
gdjs.End_32CreditsCode.GDYellowDialougeBoxObjects4.length = 0;
gdjs.End_32CreditsCode.GDFade2Objects1.length = 0;
gdjs.End_32CreditsCode.GDFade2Objects2.length = 0;
gdjs.End_32CreditsCode.GDFade2Objects3.length = 0;
gdjs.End_32CreditsCode.GDFade2Objects4.length = 0;
gdjs.End_32CreditsCode.GDCreditsObjects1.length = 0;
gdjs.End_32CreditsCode.GDCreditsObjects2.length = 0;
gdjs.End_32CreditsCode.GDCreditsObjects3.length = 0;
gdjs.End_32CreditsCode.GDCreditsObjects4.length = 0;

gdjs.End_32CreditsCode.eventsList5(runtimeScene);
gdjs.End_32CreditsCode.GDNameObjects1.length = 0;
gdjs.End_32CreditsCode.GDNameObjects2.length = 0;
gdjs.End_32CreditsCode.GDNameObjects3.length = 0;
gdjs.End_32CreditsCode.GDNameObjects4.length = 0;
gdjs.End_32CreditsCode.GDYellowDialougeBoxObjects1.length = 0;
gdjs.End_32CreditsCode.GDYellowDialougeBoxObjects2.length = 0;
gdjs.End_32CreditsCode.GDYellowDialougeBoxObjects3.length = 0;
gdjs.End_32CreditsCode.GDYellowDialougeBoxObjects4.length = 0;
gdjs.End_32CreditsCode.GDFade2Objects1.length = 0;
gdjs.End_32CreditsCode.GDFade2Objects2.length = 0;
gdjs.End_32CreditsCode.GDFade2Objects3.length = 0;
gdjs.End_32CreditsCode.GDFade2Objects4.length = 0;
gdjs.End_32CreditsCode.GDCreditsObjects1.length = 0;
gdjs.End_32CreditsCode.GDCreditsObjects2.length = 0;
gdjs.End_32CreditsCode.GDCreditsObjects3.length = 0;
gdjs.End_32CreditsCode.GDCreditsObjects4.length = 0;


return;

}

gdjs['End_32CreditsCode'] = gdjs.End_32CreditsCode;
