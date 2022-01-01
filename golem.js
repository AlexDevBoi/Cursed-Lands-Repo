const cloneTab = 3;
const cloneName = "chad-golemite-boss";

function died(event) {
  // use server side npc to work
  spawnClone(event, cloneTab, cloneName, 0, 0, 1);
  spawnClone(event, cloneTab, cloneName, 0, 0, -1);
}

function spawnClone(event, tab, name, x, y, z) {
  var me = event.npc;
  var spawn = event.API.getClones().get(tab, name, event.npc.getWorld());
  spawn.setHome(me.x + x, me.y + y, me.z + z);
  spawn.setPosition(me.x + x, me.y + y, me.z + z);
  spawn.spawn();
}
