/**
 * Interface representing a Near Earth Asteroid.
 *
 * @interface INearEarthAsteroids
 */
export interface INearEarthAsteroids {
  /** The designation of the asteroid (e.g., name or identifier). */
  designation: string;

  /** The date when the asteroid was discovered. */
  discovery_date: string;

  /** The absolute magnitude of the asteroid. Optional property. */
  h_mag?: string;

  /** The Minimum Orbit Intersection Distance in astronomical units (au). */
  moid_au: string;

  /** The perihelion distance in astronomical units (au). Optional property. */
  q_au_1: string;

  /** The aphelion distance in astronomical units (au). Optional property. */
  q_au_2?: string;

  /** The orbital period of the asteroid in years. Optional property. */
  period_yr?: string;

  /** The inclination of the asteroid's orbit in degrees. */
  i_deg: string;

  /** Indicates whether the asteroid is potentially hazardous (PHA). */
  pha: string;

  /** The classification of the asteroid's orbit. */
  orbit_class: string;
}
