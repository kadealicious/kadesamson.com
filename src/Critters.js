/**
 * Spawn critters isnide of a `<TubeMap>`!
 */
function CritterSpawner(critterSpawnerOpts = critterSpawnerOpts()) {
  console.log("creating critter spawner with opts: " + critterSpawnerOpts);

  return (
    <>
    </>
  );
}

/**
 * Types of critters (and their attributes) that can inhabit tube city!
 */
const CritterType = {
  Hamster: { name: "hamster", speed: 1.0 },
  Gerbil: { name: "gerbil", speed: 2.0 },
  GuineaPig: { name: "guinea pig", speed: 0.5 },
  Ferret: { name: "ferret", speed: 4.0 },
};

/**
  * Create the default set of options for a `<CritterSpawner>`.  Fields can be
  * modified by the user once this function has returned its default option set.
  *
  * `critters: CritterType[]` - Which critters should crawl around our tube city?
  * `critterFreq: number` - How many critters should we spawn per second?
  * `critterProportion: Map<CritterType, number>` - For each `CritterType` as a
  *     percentage from 0.0->1.0, how often should each occur when a new one spawns?
  */
function critterSpawnerOpts() {
  return {
    critters: [CritterType.Hamster],
    critterFreq: 1.0,
    critterProportion: new Map([[CritterType.Hamster, 1.0]]),
  };
}

export default { CritterSpawner, CritterType, critterSpawnerOpts };
