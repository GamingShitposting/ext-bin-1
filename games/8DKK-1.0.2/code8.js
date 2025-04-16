gdjs.FlashbackCode = {};
gdjs.FlashbackCode.localVariables = [];
gdjs.FlashbackCode.GDFlashbackObjects1= [];
gdjs.FlashbackCode.GDFlashbackObjects2= [];


gdjs.FlashbackCode.asyncCallback14311260 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FlashbackCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainGame(Chpt.3)", false);
}gdjs.FlashbackCode.localVariables.length = 0;
}
gdjs.FlashbackCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FlashbackCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.FlashbackCode.asyncCallback14311260(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FlashbackCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14310540);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Flashback"), gdjs.FlashbackCode.GDFlashbackObjects1);
{for(var i = 0, len = gdjs.FlashbackCode.GDFlashbackObjects1.length ;i < len;++i) {
    gdjs.FlashbackCode.GDFlashbackObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flashback"), gdjs.FlashbackCode.GDFlashbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FlashbackCode.GDFlashbackObjects1.length;i<l;++i) {
    if ( gdjs.FlashbackCode.GDFlashbackObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.FlashbackCode.GDFlashbackObjects1[k] = gdjs.FlashbackCode.GDFlashbackObjects1[i];
        ++k;
    }
}
gdjs.FlashbackCode.GDFlashbackObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14311340);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FlashbackCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.FlashbackCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FlashbackCode.GDFlashbackObjects1.length = 0;
gdjs.FlashbackCode.GDFlashbackObjects2.length = 0;

gdjs.FlashbackCode.eventsList1(runtimeScene);
gdjs.FlashbackCode.GDFlashbackObjects1.length = 0;
gdjs.FlashbackCode.GDFlashbackObjects2.length = 0;


return;

}

gdjs['FlashbackCode'] = gdjs.FlashbackCode;
