import { ResourcePool } from './ResourcePool';

describe('ResourcePool', () => {
	const creatorFunc = () => {
		return {
			counter: 0,
		};
	};

	const resetFunc = (coolThing: { counter: number }) => {
		coolThing.counter = 0;
		return coolThing;
	};

	it('should create a new ResourcePool', () => {
		const pool = new ResourcePool(creatorFunc, resetFunc, 1);
		expect(pool).toBeDefined();

		const objectThatIsReadyToUse = pool.getElement();

		expect(objectThatIsReadyToUse).toBeDefined();

		expect(objectThatIsReadyToUse.available).toBe(false);

		expect(objectThatIsReadyToUse.data).toEqual({ counter: 0 });

		expect(objectThatIsReadyToUse.data.counter).toBe(0);

		objectThatIsReadyToUse.data.counter++;

		objectThatIsReadyToUse.name = 'Prashant';

		expect(objectThatIsReadyToUse.data.counter).toBe(1);
		expect(objectThatIsReadyToUse.name).toBe('Prashant');

		pool.releaseElement(objectThatIsReadyToUse);

		expect(objectThatIsReadyToUse.available).toBe(true);
	});
});
