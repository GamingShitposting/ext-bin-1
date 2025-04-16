gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.GDNooseObjects1= [];
gdjs.Main_32MenuCode.GDNooseObjects2= [];
gdjs.Main_32MenuCode.GDNooseObjects3= [];
gdjs.Main_32MenuCode.GDNooseObjects4= [];
gdjs.Main_32MenuCode.GDYellowDialougeBoxObjects1= [];
gdjs.Main_32MenuCode.GDYellowDialougeBoxObjects2= [];
gdjs.Main_32MenuCode.GDYellowDialougeBoxObjects3= [];
gdjs.Main_32MenuCode.GDYellowDialougeBoxObjects4= [];
gdjs.Main_32MenuCode.GDTutObjects1= [];
gdjs.Main_32MenuCode.GDTutObjects2= [];
gdjs.Main_32MenuCode.GDTutObjects3= [];
gdjs.Main_32MenuCode.GDTutObjects4= [];
gdjs.Main_32MenuCode.GDLogoObjects1= [];
gdjs.Main_32MenuCode.GDLogoObjects2= [];
gdjs.Main_32MenuCode.GDLogoObjects3= [];
gdjs.Main_32MenuCode.GDLogoObjects4= [];
gdjs.Main_32MenuCode.GDBlackDialougeBoxObjects1= [];
gdjs.Main_32MenuCode.GDBlackDialougeBoxObjects2= [];
gdjs.Main_32MenuCode.GDBlackDialougeBoxObjects3= [];
gdjs.Main_32MenuCode.GDBlackDialougeBoxObjects4= [];
gdjs.Main_32MenuCode.GDStartObjects1= [];
gdjs.Main_32MenuCode.GDStartObjects2= [];
gdjs.Main_32MenuCode.GDStartObjects3= [];
gdjs.Main_32MenuCode.GDStartObjects4= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects1= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects2= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects3= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects4= [];
gdjs.Main_32MenuCode.GDQuitObjects1= [];
gdjs.Main_32MenuCode.GDQuitObjects2= [];
gdjs.Main_32MenuCode.GDQuitObjects3= [];
gdjs.Main_32MenuCode.GDQuitObjects4= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects1= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects2= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects3= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects4= [];
gdjs.Main_32MenuCode.GDFadeObjects1= [];
gdjs.Main_32MenuCode.GDFadeObjects2= [];
gdjs.Main_32MenuCode.GDFadeObjects3= [];
gdjs.Main_32MenuCode.GDFadeObjects4= [];
gdjs.Main_32MenuCode.GDChapterObjects1= [];
gdjs.Main_32MenuCode.GDChapterObjects2= [];
gdjs.Main_32MenuCode.GDChapterObjects3= [];
gdjs.Main_32MenuCode.GDChapterObjects4= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects1= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects2= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects3= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects4= [];
gdjs.Main_32MenuCode.GDChapter1Objects1= [];
gdjs.Main_32MenuCode.GDChapter1Objects2= [];
gdjs.Main_32MenuCode.GDChapter1Objects3= [];
gdjs.Main_32MenuCode.GDChapter1Objects4= [];
gdjs.Main_32MenuCode.GDChapter2Objects1= [];
gdjs.Main_32MenuCode.GDChapter2Objects2= [];
gdjs.Main_32MenuCode.GDChapter2Objects3= [];
gdjs.Main_32MenuCode.GDChapter2Objects4= [];
gdjs.Main_32MenuCode.GDChapter3Objects1= [];
gdjs.Main_32MenuCode.GDChapter3Objects2= [];
gdjs.Main_32MenuCode.GDChapter3Objects3= [];
gdjs.Main_32MenuCode.GDChapter3Objects4= [];
gdjs.Main_32MenuCode.GDBackObjects1= [];
gdjs.Main_32MenuCode.GDBackObjects2= [];
gdjs.Main_32MenuCode.GDBackObjects3= [];
gdjs.Main_32MenuCode.GDBackObjects4= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects1= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects2= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects3= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects4= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects1= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects2= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects3= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects4= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects1= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects2= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects3= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects4= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects1= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects2= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects3= [];
gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects4= [];


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14112180);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpeakingAnimation");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SpeakingAnimation") < 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14113220);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tut"), gdjs.Main_32MenuCode.GDTutObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDTutObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTutObjects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 20, "easeInQuad", 1, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SpeakingAnimation") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14114636);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tut"), gdjs.Main_32MenuCode.GDTutObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDTutObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTutObjects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "easeOutQuad", 1, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SpeakingAnimation") >= 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14116188);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpeakingAnimation");
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDStartObjects2Objects = Hashtable.newFrom({"Start": gdjs.Main_32MenuCode.GDStartObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapter1Objects2Objects = Hashtable.newFrom({"Chapter1": gdjs.Main_32MenuCode.GDChapter1Objects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapter2Objects2Objects = Hashtable.newFrom({"Chapter2": gdjs.Main_32MenuCode.GDChapter2Objects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapter3Objects2Objects = Hashtable.newFrom({"Chapter3": gdjs.Main_32MenuCode.GDChapter3Objects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBackObjects2Objects = Hashtable.newFrom({"Back": gdjs.Main_32MenuCode.GDBackObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDQuitObjects2Objects = Hashtable.newFrom({"Quit": gdjs.Main_32MenuCode.GDQuitObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapterObjects2Objects = Hashtable.newFrom({"Chapter": gdjs.Main_32MenuCode.GDChapterObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDStartObjects2Objects = Hashtable.newFrom({"Start": gdjs.Main_32MenuCode.GDStartObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDQuitObjects2Objects = Hashtable.newFrom({"Quit": gdjs.Main_32MenuCode.GDQuitObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapterObjects2Objects = Hashtable.newFrom({"Chapter": gdjs.Main_32MenuCode.GDChapterObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapter1Objects2Objects = Hashtable.newFrom({"Chapter1": gdjs.Main_32MenuCode.GDChapter1Objects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapter2Objects2Objects = Hashtable.newFrom({"Chapter2": gdjs.Main_32MenuCode.GDChapter2Objects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapter3Objects2Objects = Hashtable.newFrom({"Chapter3": gdjs.Main_32MenuCode.GDChapter3Objects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.Main_32MenuCode.GDBackObjects1});
gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14117412);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Main_32MenuCode.GDBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox2"), gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects2);
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox3"), gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects2);
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox4"), gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects2);
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox5"), gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects2);
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox6"), gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects2);
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox7"), gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects2);
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox8"), gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects2);
gdjs.copyArray(runtimeScene.getObjects("Chapter"), gdjs.Main_32MenuCode.GDChapterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Chapter1"), gdjs.Main_32MenuCode.GDChapter1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Chapter2"), gdjs.Main_32MenuCode.GDChapter2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Chapter3"), gdjs.Main_32MenuCode.GDChapter3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32MenuCode.GDQuitObjects2);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Main_32MenuCode.GDStartObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDStartObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDStartObjects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDQuitObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDQuitObjects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDChapterObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDChapterObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDChapter1Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDChapter1Objects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDChapter2Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDChapter2Objects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDChapter3Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDChapter3Objects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDBackObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBackObjects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects2[i].getBehavior("Opacity").setOpacity(0);
}
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
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14119636);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chapter"), gdjs.Main_32MenuCode.GDChapterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32MenuCode.GDQuitObjects2);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Main_32MenuCode.GDStartObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tut"), gdjs.Main_32MenuCode.GDTutObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDTutObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTutObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDStartObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDStartObjects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDChapterObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDChapterObjects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDQuitObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDQuitObjects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 1, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Main_32MenuCode.GDStartObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDStartObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14122204);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox2"), gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 0.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chapter1"), gdjs.Main_32MenuCode.GDChapter1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapter1Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14123828);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox5"), gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 0.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chapter2"), gdjs.Main_32MenuCode.GDChapter2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapter2Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14125436);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox6"), gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 0.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chapter3"), gdjs.Main_32MenuCode.GDChapter3Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapter3Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14127164);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox7"), gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 0.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Main_32MenuCode.GDBackObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBackObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14128772);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox8"), gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 0.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32MenuCode.GDQuitObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDQuitObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14130380);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox3"), gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 0.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chapter"), gdjs.Main_32MenuCode.GDChapterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapterObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14131988);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox4"), gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 0.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Main_32MenuCode.GDStartObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDStartObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox2"), gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 0.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32MenuCode.GDQuitObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDQuitObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox3"), gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 0.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chapter"), gdjs.Main_32MenuCode.GDChapterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapterObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox4"), gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 0.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chapter1"), gdjs.Main_32MenuCode.GDChapter1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapter1Objects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox5"), gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 0.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chapter2"), gdjs.Main_32MenuCode.GDChapter2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapter2Objects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox6"), gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 0.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chapter3"), gdjs.Main_32MenuCode.GDChapter3Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapter3Objects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox7"), gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 0.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Main_32MenuCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBackObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox8"), gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects1[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 0.5, false);
}
}}

}


};gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14144076);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.Main_32MenuCode.GDFadeObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDFadeObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1, false);
}
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDStartObjects2Objects = Hashtable.newFrom({"Start": gdjs.Main_32MenuCode.GDStartObjects2});
gdjs.Main_32MenuCode.asyncCallback14147276 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainGame(Chpt.1)", false);
}gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback14147276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.asyncCallback14146916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback14146916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapter1Objects2Objects = Hashtable.newFrom({"Chapter1": gdjs.Main_32MenuCode.GDChapter1Objects2});
gdjs.Main_32MenuCode.asyncCallback14149820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainGame(Chpt.1)", false);
}gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback14149820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.asyncCallback14149460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback14149460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapter2Objects2Objects = Hashtable.newFrom({"Chapter2": gdjs.Main_32MenuCode.GDChapter2Objects2});
gdjs.Main_32MenuCode.asyncCallback14152564 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Eight Day", false);
}gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback14152564(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.asyncCallback14152204 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback14152204(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapter3Objects2Objects = Hashtable.newFrom({"Chapter3": gdjs.Main_32MenuCode.GDChapter3Objects2});
gdjs.Main_32MenuCode.asyncCallback14155284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainGame(Chpt.2)", false);
}gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback14155284(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.asyncCallback14154924 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback14154924(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapterObjects2Objects = Hashtable.newFrom({"Chapter": gdjs.Main_32MenuCode.GDChapterObjects2});
gdjs.Main_32MenuCode.asyncCallback14157604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Main_32MenuCode.GDBackObjects3);
gdjs.copyArray(runtimeScene.getObjects("Chapter1"), gdjs.Main_32MenuCode.GDChapter1Objects3);
gdjs.copyArray(runtimeScene.getObjects("Chapter2"), gdjs.Main_32MenuCode.GDChapter2Objects3);
gdjs.copyArray(runtimeScene.getObjects("Chapter3"), gdjs.Main_32MenuCode.GDChapter3Objects3);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDChapter1Objects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDChapter1Objects3[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDChapter2Objects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDChapter2Objects3[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDChapter3Objects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDChapter3Objects3[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDBackObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBackObjects3[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 1, false);
}
}gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback14157604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBackObjects2Objects = Hashtable.newFrom({"Back": gdjs.Main_32MenuCode.GDBackObjects2});
gdjs.Main_32MenuCode.asyncCallback14160932 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Chapter"), gdjs.Main_32MenuCode.GDChapterObjects3);
gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32MenuCode.GDQuitObjects3);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Main_32MenuCode.GDStartObjects3);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDStartObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDStartObjects3[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDChapterObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDChapterObjects3[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDQuitObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDQuitObjects3[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 1, false);
}
}gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback14160932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.Main_32MenuCode.GDQuitObjects1});
gdjs.Main_32MenuCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Main_32MenuCode.GDStartObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDStartObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spam") >= 0.6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14146068);
}
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.Main_32MenuCode.GDFadeObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDFadeObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFadeObjects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 2.5, false);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 2);
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chapter1"), gdjs.Main_32MenuCode.GDChapter1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapter1Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spam") >= 0.6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14148524);
}
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.Main_32MenuCode.GDFadeObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDFadeObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFadeObjects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 2.5, false);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 2);
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chapter2"), gdjs.Main_32MenuCode.GDChapter2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapter2Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spam") >= 0.6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14151268);
}
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.Main_32MenuCode.GDFadeObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDFadeObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFadeObjects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 2.5, false);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 2);
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chapter3"), gdjs.Main_32MenuCode.GDChapter3Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapter3Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spam") >= 0.6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14153988);
}
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.Main_32MenuCode.GDFadeObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDFadeObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFadeObjects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 255, "linear", 2.5, false);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 2);
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chapter"), gdjs.Main_32MenuCode.GDChapterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDChapterObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spam") >= 0.6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14156708);
}
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox2"), gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects2);
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox3"), gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects2);
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox4"), gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects2);
/* Reuse gdjs.Main_32MenuCode.GDChapterObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32MenuCode.GDQuitObjects2);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Main_32MenuCode.GDStartObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spam");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDStartObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDStartObjects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1, false);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1, false);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDQuitObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDQuitObjects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1, false);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1, false);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1, false);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDChapterObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDChapterObjects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1, false);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Main_32MenuCode.GDBackObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBackObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spam") >= 0.6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14160564);
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDBackObjects2 */
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox5"), gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects2);
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox6"), gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects2);
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox7"), gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects2);
gdjs.copyArray(runtimeScene.getObjects("BlackDialougeBox8"), gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects2);
gdjs.copyArray(runtimeScene.getObjects("Chapter1"), gdjs.Main_32MenuCode.GDChapter1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Chapter2"), gdjs.Main_32MenuCode.GDChapter2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Chapter3"), gdjs.Main_32MenuCode.GDChapter3Objects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spam");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDChapter1Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDChapter1Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1, false);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDChapter2Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDChapter2Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1, false);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDChapter3Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDChapter3Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1, false);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDBackObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBackObjects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1, false);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1, false);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1, false);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1, false);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects2[i].getBehavior("Tween").addObjectOpacityTween2("OP", 0, "linear", 1, false);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32MenuCode.GDQuitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDQuitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spam") >= 0.6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14164020);
}
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.Main_32MenuCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14165068);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Grey Sky All-Stars (Main Menu).mp3", 1, true, 100, 1);
}}

}


};gdjs.Main_32MenuCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14111212);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spam");
}}

}


{


gdjs.Main_32MenuCode.eventsList0(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList1(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList2(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList13(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList14(runtimeScene);
}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDNooseObjects1.length = 0;
gdjs.Main_32MenuCode.GDNooseObjects2.length = 0;
gdjs.Main_32MenuCode.GDNooseObjects3.length = 0;
gdjs.Main_32MenuCode.GDNooseObjects4.length = 0;
gdjs.Main_32MenuCode.GDYellowDialougeBoxObjects1.length = 0;
gdjs.Main_32MenuCode.GDYellowDialougeBoxObjects2.length = 0;
gdjs.Main_32MenuCode.GDYellowDialougeBoxObjects3.length = 0;
gdjs.Main_32MenuCode.GDYellowDialougeBoxObjects4.length = 0;
gdjs.Main_32MenuCode.GDTutObjects1.length = 0;
gdjs.Main_32MenuCode.GDTutObjects2.length = 0;
gdjs.Main_32MenuCode.GDTutObjects3.length = 0;
gdjs.Main_32MenuCode.GDTutObjects4.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects1.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects2.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects3.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects4.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBoxObjects1.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBoxObjects2.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBoxObjects3.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBoxObjects4.length = 0;
gdjs.Main_32MenuCode.GDStartObjects1.length = 0;
gdjs.Main_32MenuCode.GDStartObjects2.length = 0;
gdjs.Main_32MenuCode.GDStartObjects3.length = 0;
gdjs.Main_32MenuCode.GDStartObjects4.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects1.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects2.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects3.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects4.length = 0;
gdjs.Main_32MenuCode.GDQuitObjects1.length = 0;
gdjs.Main_32MenuCode.GDQuitObjects2.length = 0;
gdjs.Main_32MenuCode.GDQuitObjects3.length = 0;
gdjs.Main_32MenuCode.GDQuitObjects4.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects1.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects2.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects3.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects4.length = 0;
gdjs.Main_32MenuCode.GDFadeObjects1.length = 0;
gdjs.Main_32MenuCode.GDFadeObjects2.length = 0;
gdjs.Main_32MenuCode.GDFadeObjects3.length = 0;
gdjs.Main_32MenuCode.GDFadeObjects4.length = 0;
gdjs.Main_32MenuCode.GDChapterObjects1.length = 0;
gdjs.Main_32MenuCode.GDChapterObjects2.length = 0;
gdjs.Main_32MenuCode.GDChapterObjects3.length = 0;
gdjs.Main_32MenuCode.GDChapterObjects4.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects1.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects2.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects3.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects4.length = 0;
gdjs.Main_32MenuCode.GDChapter1Objects1.length = 0;
gdjs.Main_32MenuCode.GDChapter1Objects2.length = 0;
gdjs.Main_32MenuCode.GDChapter1Objects3.length = 0;
gdjs.Main_32MenuCode.GDChapter1Objects4.length = 0;
gdjs.Main_32MenuCode.GDChapter2Objects1.length = 0;
gdjs.Main_32MenuCode.GDChapter2Objects2.length = 0;
gdjs.Main_32MenuCode.GDChapter2Objects3.length = 0;
gdjs.Main_32MenuCode.GDChapter2Objects4.length = 0;
gdjs.Main_32MenuCode.GDChapter3Objects1.length = 0;
gdjs.Main_32MenuCode.GDChapter3Objects2.length = 0;
gdjs.Main_32MenuCode.GDChapter3Objects3.length = 0;
gdjs.Main_32MenuCode.GDChapter3Objects4.length = 0;
gdjs.Main_32MenuCode.GDBackObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackObjects3.length = 0;
gdjs.Main_32MenuCode.GDBackObjects4.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects1.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects2.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects3.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects4.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects1.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects2.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects3.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects4.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects1.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects2.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects3.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects4.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects1.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects2.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects3.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects4.length = 0;

gdjs.Main_32MenuCode.eventsList15(runtimeScene);
gdjs.Main_32MenuCode.GDNooseObjects1.length = 0;
gdjs.Main_32MenuCode.GDNooseObjects2.length = 0;
gdjs.Main_32MenuCode.GDNooseObjects3.length = 0;
gdjs.Main_32MenuCode.GDNooseObjects4.length = 0;
gdjs.Main_32MenuCode.GDYellowDialougeBoxObjects1.length = 0;
gdjs.Main_32MenuCode.GDYellowDialougeBoxObjects2.length = 0;
gdjs.Main_32MenuCode.GDYellowDialougeBoxObjects3.length = 0;
gdjs.Main_32MenuCode.GDYellowDialougeBoxObjects4.length = 0;
gdjs.Main_32MenuCode.GDTutObjects1.length = 0;
gdjs.Main_32MenuCode.GDTutObjects2.length = 0;
gdjs.Main_32MenuCode.GDTutObjects3.length = 0;
gdjs.Main_32MenuCode.GDTutObjects4.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects1.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects2.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects3.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects4.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBoxObjects1.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBoxObjects2.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBoxObjects3.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBoxObjects4.length = 0;
gdjs.Main_32MenuCode.GDStartObjects1.length = 0;
gdjs.Main_32MenuCode.GDStartObjects2.length = 0;
gdjs.Main_32MenuCode.GDStartObjects3.length = 0;
gdjs.Main_32MenuCode.GDStartObjects4.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects1.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects2.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects3.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox2Objects4.length = 0;
gdjs.Main_32MenuCode.GDQuitObjects1.length = 0;
gdjs.Main_32MenuCode.GDQuitObjects2.length = 0;
gdjs.Main_32MenuCode.GDQuitObjects3.length = 0;
gdjs.Main_32MenuCode.GDQuitObjects4.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects1.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects2.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects3.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox3Objects4.length = 0;
gdjs.Main_32MenuCode.GDFadeObjects1.length = 0;
gdjs.Main_32MenuCode.GDFadeObjects2.length = 0;
gdjs.Main_32MenuCode.GDFadeObjects3.length = 0;
gdjs.Main_32MenuCode.GDFadeObjects4.length = 0;
gdjs.Main_32MenuCode.GDChapterObjects1.length = 0;
gdjs.Main_32MenuCode.GDChapterObjects2.length = 0;
gdjs.Main_32MenuCode.GDChapterObjects3.length = 0;
gdjs.Main_32MenuCode.GDChapterObjects4.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects1.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects2.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects3.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox4Objects4.length = 0;
gdjs.Main_32MenuCode.GDChapter1Objects1.length = 0;
gdjs.Main_32MenuCode.GDChapter1Objects2.length = 0;
gdjs.Main_32MenuCode.GDChapter1Objects3.length = 0;
gdjs.Main_32MenuCode.GDChapter1Objects4.length = 0;
gdjs.Main_32MenuCode.GDChapter2Objects1.length = 0;
gdjs.Main_32MenuCode.GDChapter2Objects2.length = 0;
gdjs.Main_32MenuCode.GDChapter2Objects3.length = 0;
gdjs.Main_32MenuCode.GDChapter2Objects4.length = 0;
gdjs.Main_32MenuCode.GDChapter3Objects1.length = 0;
gdjs.Main_32MenuCode.GDChapter3Objects2.length = 0;
gdjs.Main_32MenuCode.GDChapter3Objects3.length = 0;
gdjs.Main_32MenuCode.GDChapter3Objects4.length = 0;
gdjs.Main_32MenuCode.GDBackObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackObjects3.length = 0;
gdjs.Main_32MenuCode.GDBackObjects4.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects1.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects2.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects3.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox5Objects4.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects1.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects2.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects3.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox6Objects4.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects1.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects2.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects3.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox7Objects4.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects1.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects2.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects3.length = 0;
gdjs.Main_32MenuCode.GDBlackDialougeBox8Objects4.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
