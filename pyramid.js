class Pyramid {
  constructor(target, rows) {
    this.target = target;
    this.rows = rows;
    this.pathFound = "";
  }

  get path() {
    return this.findPath();
  }

  /**
   * Descend down the Pyramid until the target path is found and return it.
   *
   * @param {number} currentRow       Start at the first descension
   * @param {number} parentIndex      Where the parent number was located
   * @param {number} runningTotal     The product of the path thus far
   * @param {string} runningDirection The directions taken on this path
   *
   * @returns {string|boolean} The target path if found, false otherwise
   */
  findPath(
    currentRow = 1,
    parentIndex = 0,
    runningTotal = this.rows[0],
    runningDirection = ""
  ) {
    const row = this.rows[currentRow];

    // The left path will have the same index as parent, the right path +1
    const pathOptions = [row[parentIndex], row[parentIndex + 1]];

    // The existential split of a path
    pathOptions.forEach((number, index) => {
      // If index == 0 then left, index == 1 then right
      const direction = index ? "R" : "L";

      // Find the product of the new path
      currentRow++;
      runningTotal = runningTotal * number;
      runningDirection = runningDirection + direction;

      // If we've found the path, pop it up the recursion stack
      if (runningTotal == this.target && currentRow == this.rows.length) {
        this.pathFound = runningDirection;
        return true;
      }
      // Otherwise keep going down
      else if (currentRow < this.rows.length) {
        // Calculate this parentIndex in relation to its parent
        parentIndex = parentIndex + index;
        this.findPath(currentRow, parentIndex, runningTotal, runningDirection);
      }

      // Ascending back up the stack, remove this number from the path
      currentRow--;
      runningTotal = runningTotal / number;
      runningDirection = runningDirection.slice(0, -1);
    });

    if (this.pathFound) {
      return this.pathFound;
    } else {
      // If we didn't find a path, return false
      return false;
    }
  }
}

const target = 720;
const rows = [[2], [4, 3], [3, 2, 6], [2, 9, 5, 2], [10, 5, 2, 15, 5]];

const pyramid = new Pyramid(target, rows);
console.log(pyramid.path);
