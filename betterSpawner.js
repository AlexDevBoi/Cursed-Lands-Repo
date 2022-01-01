var waitTime = 10;
var coolDown = waitTime;
var aggro = false;
var totalSpawns = 1;
var offsetX = [0];
var offsetY = [0];
var offsetZ = [0];

function tick(event) {
  if (coolDown < waitTime) {
    coolDown++;
  }
  if (coolDown >= waitTime && aggro) {
    for (var i = 0; i < totalSpawns; i++) {
      spawnClone(event, _CLONE_TAB, "_CLONE_NAME", offsetX[i], offsetY[i], offsetZ[i]);
    }
  }
}

function spawnClone(event, tab, name, x, y, z) {
  var me = event.npc;
  var spawn = event.API.getClones().get(tab, name, event.npc.getWorld());
  spawn.setHome(me.x + x, me.y + y, me.z + z);
  spawn.setPosition(me.x + x, me.y + y, me.z + z);
  spawn.spawn();
}
