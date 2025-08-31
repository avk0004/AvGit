public class Main{
    public static void main(String[] args) {
        int a = 7;
        if (a%2==0) {
            System.out.println(a + " is Even number");
        } else {
            System.out.println(a + " is Odd number");
        }
    System.out.println("Leap Year or not");
    int b = 2025;
		
		if (b%4 ==0)
		{
		    System.out.println(b+" is a leap year");
		}
		else {
		    System.out.println(b+ " is not a leap year");
		}
    System.out.println("CHARACTER");
    char c ='1';
    if(( c>='A' && c<='Z')|| (c>='a' &&c<='z' )){
        System.out.println("Alphabet");
    }
    else if (c >='1' && c<='9'){
        System.out.println("number");
    }
    else{
        System.out.println("Specail character");
    }
    }
}
